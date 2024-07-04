import { v } from "convex/values";
import { mutation, query, QueryCtx, MutationCtx } from "./_generated/server";
import { ConvexError } from "convex/values";
import { stat } from "fs";


// Helper function to get authenticated user
const getAuthenticatedUser = async (ctx: QueryCtx | MutationCtx) => {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new ConvexError("Not authenticated");
  }
  return identity;
};

export const addPost = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    image: v.optional(v.string()),
    status: v.optional(v.union(v.literal("draft"), v.literal("published"), v.literal("archived"))),
    content: v.any(),
    excerpt: v.string(),
    category: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await getAuthenticatedUser(ctx);

    const author = {
      id: identity.subject,
      name: identity.name ?? "Anonymous",
      image: identity.pictureUrl ?? "",
    };

    const now = Date.now();

    const postId = await ctx.db.insert("posts", {
      ...args,
      author,
      status: args.status || "draft",
      category: args.category || "uncategorized",
      updatedAt: now,
    });

    return postId;
  },
});

export const updatePost = mutation({
  args: {
    id: v.id("posts"),
    title: v.optional(v.string()),
    slug: v.optional(v.string()),
    image: v.optional(v.string()),
    content: v.optional(v.any()),
    excerpt: v.optional(v.string()),
    status: v.optional(v.union(v.literal("draft"), v.literal("published"), v.literal("archived"))),
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const identity = await getAuthenticatedUser(ctx);

    const post = await ctx.db.get(args.id);
    if (!post) {
      throw new ConvexError("Post not found");
    }

    if (post.author.id !== identity.subject) {
      const isAdmin = await ctx.db.query("users")
        .filter(q => q.eq(q.field("_id"), identity.subject))
        .filter(q => q.or(
          q.eq(q.field("role"), "admin"),
          q.eq(q.field("role"), "org:admin"),
          q.eq(q.field("role"), "author")
        ))
        .unique();

      if (!isAdmin) {
        throw new ConvexError("Unauthorized");
      }
    }

    const updateArgs = { ...args, updatedAt: Date.now() };
    const { id, ...updateFields } = updateArgs;

    await ctx.db.patch(args.id, updateFields);
    return args.id;
  },
});

export const deletePost = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    const identity = await getAuthenticatedUser(ctx);

    const post = await ctx.db.get(args.id);
    if (!post) {
      throw new ConvexError("Post not found");
    }

    if (post.author.id !== identity.subject) {
      const isAdmin = await ctx.db.query("users")
        .filter(q => q.eq(q.field("_id"), identity.subject))
        .filter(q => q.or(
          q.eq(q.field("role"), "admin"),
          q.eq(q.field("role"), "org:admin")
        ))
        .unique();

      if (!isAdmin) {
        throw new ConvexError("Unauthorized");
      }
    }

    await ctx.db.delete(args.id);
  },
});

export const getPost = query({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const listPosts = query({
  args: {
    status: v.optional(v.union(v.literal("draft"), v.literal("published"), v.literal("archived"))),
    category: v.optional(v.string()),
    limit: v.optional(v.number()),
    cursor: v.optional(v.id("posts")),
  },
  handler: async (ctx, args) => {
    let postsQuery = ctx.db
      .query("posts")
      .order("desc")

    if (args.status) {
      postsQuery = postsQuery.filter(q => q.eq(q.field("status"), args.status));
    }

    if (args.category) {
      postsQuery = postsQuery.filter(q => q.eq(q.field("category"), args.category));
    }

    if (args.cursor) {
      postsQuery = postsQuery.filter(q => q.gt(q.field("_id"), args.cursor || 10));
    }

    const posts = await postsQuery.take(args.limit ?? 10);
    const nextCursor = posts.length > 0 ? posts[posts.length - 1]._id : null;

    return { posts, nextCursor };
  },
});

export const getPostBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    const post = await ctx.db.query("posts")
      .filter(q => q.eq(q.field("slug"), args.slug))
      .unique();
    return post;
  },
});


export const updatePostStatus = mutation({
  args: {
    slug: v.string(),
    status: v.union(v.literal("draft"), v.literal("published"), v.literal("archived")),
  },
  handler: async (ctx, args) => {
    const { slug, status } = args;

    // Check if the post exists
    const existingPost = await ctx.db
      .query("posts")
      .withIndex("by_slug", (q) => q.eq("slug", slug))
      .first();

    if (!existingPost) {
      throw new Error(`Post with slug "${slug}" not found`);
    }

    // Update the post status
    await ctx.db.patch(existingPost._id, { status, updatedAt: Date.now() });

    return { success: true };
  },
});


export const getBlogCount = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const posts = await ctx.db
      .query("posts")
      .withIndex("by_author", (q) => q.eq("author.id", args.userId))
      .filter((q) => q.eq(q.field("status"), "published"))
      .collect();

    const count = posts.length;

    return count;
  },
});