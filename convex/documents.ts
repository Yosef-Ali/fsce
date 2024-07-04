// convex/documents.ts
import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const get = query({
  args: { id: v.id('documents') },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const create = mutation({
  args: {
    title: v.string(),
    content: v.any(),
    authorId: v.string()
  },
  handler: async (ctx, args) => {
    const document = {
      title: args.title,
      content: args.content,
      authorId: args.authorId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    return await ctx.db.insert('documents', document);
  },
});

export const update = mutation({
  args: {
    id: v.id('documents'),
    title: v.optional(v.string()),
    content: v.optional(v.any())
  },
  handler: async (ctx, args) => {
    const { id, ...fields } = args;
    await ctx.db.patch(id, {
      ...fields,
      updatedAt: Date.now()
    });
  },
});

export const listByAuthor = query({
  args: { authorId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('documents')
      .withIndex('by_authorId', (q) => q.eq('authorId', args.authorId))
      .order('desc')
      .take(100);
  },
});