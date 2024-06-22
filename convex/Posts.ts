import { auth } from "@clerk/nextjs/dist/types/server";
import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const createPost = mutation({
  args: {
    title: v.string(),
    slug: v.string(),
    image: v.string(),
    content: v.string(),
    excerpt: v.string(),
    published: v.boolean(),
    categories: v.string(),
    author: v.string(),
    authorId: v.string(),
    authorImageUrl: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError("User not authenticated");
    }

    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), identity.email))
      .collect();

    if (user.length === 0) {
      throw new ConvexError("User not found");
    }

    return await ctx.db.insert("posts", {
      title: args.title,
      slug: args.slug,
      image: args.image,
      content: args.content,
      excerpt: args.excerpt,
      published: args.published,
      categories: args.categories,
      author: args.author,
      authorId: args.authorId,
      authorImageUrl: args.authorImageUrl,
    });
  },
});


export const updatePost = mutation({
  args: {
    id: v.id("posts"),
    title: v.string(),
    slug: v.string(),
    image: v.string(),
    content: v.string(),
    excerpt: v.string(),
    published: v.boolean(),
    categories: v.string(),
    authorId: v.id("users"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new ConvexError("User not authenticated");
    }

    const post = await ctx.db.get(args.id);
    if (!post) {
      throw new ConvexError("Post not found");
    }
    if (post.authorId !== args.authorId) {
      throw new ConvexError("Unauthorized");
    }
    return await ctx.db.patch(args.id, {
      title: args.title,
      slug: args.slug,
      image: args.image,
      content: args.content,
      excerpt: args.excerpt,
      published: args.published,
      categories: args.categories,
      authorId: args.authorId,
    });
  },
});


export const deletePost = mutation({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("User not authenticated");
    }
    const userId = identity.subject;
    const post = await ctx.db.get(args.id);
    if (!post) {
      throw new ConvexError("Post not found");
    }
    if (post.authorId !== userId) {
      throw new ConvexError("Unauthorized");
    }
    return await ctx.db.delete(args.id);
  },
});

export const getPost = query({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});




