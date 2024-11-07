import { v } from "convex/values";
import { mutation, query, QueryCtx, MutationCtx } from "./_generated/server";
import { ConvexError } from "convex/values";
import { stat } from "fs";
import { paginationOptsValidator } from "convex/server";


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

    const user = await ctx.db
      .query("users")
      .filter(q => q.eq(q.field("_id"), identity.subject))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    const isAuthor = post.author.id === identity.subject;
    const isAdminOrOrgAdmin = user.role === "admin" || user.role === "org:admin";

    console.log("Is author:", isAuthor);
    console.log("Is admin or org admin:", isAdminOrOrgAdmin);
    console.log("User role:", user.role);
    console.log("Post author:", post.author);
    console.log("User ID:", identity.subject);

    if (!isAuthor && !isAdminOrOrgAdmin) {
      throw new ConvexError("Unauthorized");
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
    paginationOpts: paginationOptsValidator,
  },
  handler: async (ctx, args) => {
    const { status, category, paginationOpts } = args;

    let postsQuery = ctx.db
      .query("posts")
      .order("desc");

    if (status) {
      postsQuery = postsQuery.filter(q => q.eq(q.field("status"), status));
    }

    if (category) {
      postsQuery = postsQuery.filter(q => q.eq(q.field("category"), category));
    }

    return await postsQuery.paginate(paginationOpts);
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

// filter by category


export const getAbout = query({
  handler: async (ctx) => {
    // filter by category
    const about = await ctx.db
      .query("posts")
      .filter(q => q.eq(q.field("category"), "About"))
      .filter(q => q.eq(q.field("status"), "published"))
      .collect();
    console.log(about);
    return about;
  },
});


export const getMerits = query({
  handler: async (ctx) => {
    const about = await ctx.db
      .query("posts")
      .filter(q => q.eq(q.field("category"), "Merits"))
      .filter(q => q.eq(q.field("status"), "published"))
      .collect();
    return about;
  },
});

export const getPrograms = query({
  handler: async (ctx) => {
    // filter by category
    const programs = await ctx.db
      .query("posts")
      .filter(q => q.eq(q.field("category"), "Programs"))
      .filter(q => q.eq(q.field("status"), "published"))
      .collect();
    console.log(programs);
    return programs;
  },
});


export const getNews = query({
  handler: async (ctx) => {
    // filter by category
    const news = await ctx.db
      .query("posts")
      .filter(q => q.eq(q.field("category"), "News"))
      .filter(q => q.eq(q.field("status"), "published"))
      .order("desc")
      .collect();
    console.log(news);
    return news;
  },
});

export const getEvents = query({
  handler: async (ctx) => {
    // filter by category
    const events = await ctx.db

      .query("posts")
      .filter(q => q.eq(q.field("category"), "Events"))
      .filter(q => q.eq(q.field("status"), "published"))
      .order("desc")
      .collect()

    console.log(events);
    return events;
  },
});


export const getRecentPosts = query({
  args: {},
  handler: async (ctx, args) => {
    const posts = await ctx.db
      .query('posts')
      .filter(q => q.eq(q.field("status"), "published"))
      .filter(q => q.or(
        q.eq(q.field("category"), "News"),
        q.eq(q.field("category"), "Events")
      ))
      .order("desc")
      .take(8);
    return posts;
  },
});

export const getCategories = query({
  args: {},
  handler: async (ctx) => {
    const posts = await ctx.db.query('posts').collect();

    const categoryCounts = posts.reduce((acc, post) => {
      if (post.category) {
        acc[post.category] = (acc[post.category] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(categoryCounts).map(([name, postCount]) => ({
      name,
      postCount
    }));
  },
});

export const searchPosts = query({
  args: { searchTerm: v.string() },
  handler: async (ctx, args) => {
    const { searchTerm } = args;

    const posts = await ctx.db
      .query("posts")
      .withSearchIndex("search_content", (q) =>
        q.search("content", searchTerm)
      )
      .filter((q) => q.eq(q.field("status"), "published"))
      .take(20)

    return posts;
  },
});