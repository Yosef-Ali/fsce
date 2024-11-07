import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  handler: async (ctx) => {
    return await ctx.db.query("categories").collect();
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    slug: v.string(),
  },
  handler: async (ctx, args) => {
    const { title, description, slug } = args;
    return await ctx.db.insert("categories", {
      title,
      description,
      slug
    });
  },
});

export const update = mutation({
  args: {
    id: v.id("categories"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    slug: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    await ctx.db.patch(id, fields);
  },
});

export const remove = mutation({
  args: { id: v.id("categories") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    try {
      const category = await ctx.db
        .query("categories")
        .filter(q => q.eq(q.field("slug"), args.slug))
        .first();

      if (!category) {
        return null;
      }

      const posts = await ctx.db
        .query("posts")
        .filter(q =>
          q.and(
            q.eq(q.field("category"), category._id),
            q.eq(q.field("status"), "published")
          )
        )
        .order("desc")
        .collect();

      // Return as separate properties instead of nested object
      return {
        _id: category._id,
        title: category.title,
        description: category.description,
        slug: category.slug,
        posts: posts
      };
    } catch (error) {
      console.error("Error in getBySlug query:", error);
      throw error;
    }
  },
});
