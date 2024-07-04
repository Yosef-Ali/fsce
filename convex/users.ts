
import { mutation, query, internalMutation } from "./_generated/server";
import { ConvexError, v } from "convex/values";


// Get all users
export const getAllUsers = query({
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

// Get a user by ID

export const getUserById = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    return user;
  },
});


export const createUser = internalMutation({
  args: {
    email: v.string(),
    name: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    active: v.string(),
    role: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .first();

    if (existingUser) {
      throw new Error("User with this tokenIdentifier already exists");
    }

    const userId = await ctx.db.insert("users", {
      email: args.email,
      name: args.name,
      imageUrl: args.imageUrl,
      clerkId: args.clerkId,
      active: "inactive",
      role: "user",
    });

    // Create notification after user creation
    await ctx.db.insert("notifications", {
      message: `User with clerkId ${args.clerkId} has been created`,
      clerkId: args.clerkId,
      type: "user_created",
      read: false,
    });

    return userId;
  },
});


export const updateUserInternally = internalMutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    name: v.string(),
  },
  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    await ctx.db.patch(user._id, {
      imageUrl: args.imageUrl,
      email: args.email,
      name: args.name,
    });
  },
});

export const deleteUserInternally = internalMutation({
  args: { clerkId: v.string() },
  async handler(ctx, args) {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    await ctx.db.delete(user._id);
  },
});


export const getUserByEmail = query({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .unique();
    if (!user) {
      throw new ConvexError("User not found");
    }
    return user;
  },
});



export const userStatus = mutation({
  args: {
    clerkId: v.string(),
    active: v.union(v.literal("active"), v.literal("inactive")),
  },

  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .unique();
    if (!user) {
      throw new ConvexError("User not found");
    }
    await ctx.db.patch(user._id, {
      ...user,
      active: args.active,
    });
    return user;
  },
});

export const updateUserRoleInternal = internalMutation({
  args: {
    clerkId: v.string(),
    userRole: v.union(v.literal("author"), v.literal("user"), v.literal("admin"), v.literal("org:admin")),
  },

  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    const updatedUser = await ctx.db.patch(user._id, {
      role: args.userRole,
    });

    return updatedUser;
  },
});

export const updateUserRole = mutation({
  args: {
    clerkId: v.string(),
    userRole: v.union(v.literal("author"), v.literal("user"), v.literal("admin"), v.literal("org:admin")),
  },

  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }
    await ctx.db.patch(user._id, {
      ...user,
      role: args.userRole,
    });
    return user;
  },
});


export const deleteUserByClerkId = mutation({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .unique();
    if (!user) {
      throw new ConvexError("User not found");
    }
    await ctx.db.delete(user._id);
  },
});

export const checkAccess = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args): Promise<{ hasAccess: boolean; error: string | null }> => {
    try {
      const user = await ctx.db
        .query("users")
        .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
        .unique();

      if (!user) {
        return { hasAccess: false, error: "User not found" };
      }
      const hasAccess = user.role === "admin" || user.role === "org:admin" || user.role === "author";
      return { hasAccess, error: null };
    } catch (error) {
      // Type guard to check if error is an instance of Error
      if (error instanceof Error) {
        return { hasAccess: false, error: error.message };
      } else {
        return { hasAccess: false, error: "An unknown error occurred" };
      }
    }
  },
});


export const isAdmin = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args): Promise<boolean> => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .unique();
    if (!user) {
      throw new ConvexError("User not found");
    }
    return user.role === "admin" || user.role === "org:admin";
  }
});



export const updateUser = mutation({
  args: {
    _id: v.id("users"),
    role: v.union(v.literal("author"), v.literal("user"), v.literal("admin"), v.literal("org:admin")),
    active: v.union(v.literal("active"), v.literal("inactive")),
  },
  handler: async (ctx, args) => {
    const { _id, ...fields } = args;
    await ctx.db.patch(_id, fields);
  },
});

export const deleteUser = mutation({
  args: { id: v.id("users") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});