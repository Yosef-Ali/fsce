
import { internal } from "./_generated/api";
import { mutation, query, internalMutation } from "./_generated/server";
import { ConvexError, v } from "convex/values";


export const addMember = internalMutation({
  args: {
    organizationId: v.string(),
    userId: v.string(),
    role: v.union(v.literal("author"), v.literal("user"), v.literal("admin"), v.literal("org:admin")),
  },
  handler: async (ctx, args) => {
    try {
      // Insert into the organizations table
      await ctx.db.insert("organizations", { ...args });

      // Fetch the user from the users table
      const user = await ctx.db.query("users")
        .filter(q => q.eq(q.field("clerkId"), args.userId))
        .unique();

      if (!user) {
        throw new ConvexError("User not found. Please check the userId.");
      }

      // Update the user's role in the users table
      const updatedUser = await ctx.db.patch(user._id, { role: args.role });

      return updatedUser;
    } catch (error) {
      console.error("Error adding member:", error);
      throw new ConvexError("Failed to add member. Please try again.");
    }
  },
});


export const getMembers = query({
  args: {
    organizationId: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      const members = await ctx.db
        .query("organizations")
        .withIndex("by_organizationId", (q) => q.eq("organizationId", args.organizationId))
        .collect();
      return members;
    } catch (error) {
      console.error("Error fetching members:", error);
      throw new ConvexError("Failed to fetch members. Please try again.");
    }
  },
});

export const updateMember = internalMutation({
  args: {
    userId: v.string(),
    role: v.string(),
  },
  handler: async (ctx, { userId, role }) => {
    // Find the member by userId
    const member = await ctx.db
      .query("organizations")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();

    if (!member) {
      throw new ConvexError("Member not found.");
    }

    // Update the member's role
    await ctx.db.patch(member._id, { role });

    return { success: true };
  },
});

export const removeMember = internalMutation({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, { userId }) => {
    // Find the member by userId
    const member = await ctx.db
      .query("organizations")
      .withIndex("by_userId", (q) => q.eq("userId", userId))
      .unique();

    if (!member) {
      throw new ConvexError("Member not found.");
    }

    // Delete the member
    await ctx.db.delete(member._id);
    return { success: true };
  },
});

