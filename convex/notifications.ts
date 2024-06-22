import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getUnreadUserCreatedNotifications = query({
  handler: async (ctx) => {
  
    return await ctx.db
      .query("notifications")
      .filter((q) => q.eq(q.field("type"), "user_created"))
      .filter((q) => q.eq(q.field("read"), false))
      .collect();
  },
});

export const markAsRead = mutation({
  args: { id: v.id("notifications") },
  handler: async (ctx, args) => {
    const userId = await ctx.auth.getUserIdentity();
    if (!userId) throw new Error("Not authenticated");

    await ctx.db.patch(args.id, { read: true });
  },
});

export const markAllAsRead = mutation({
  handler: async (ctx) => {
    const userId = await ctx.auth.getUserIdentity();
    if (!userId) throw new Error("Not authenticated");

    const unreadNotifications = await ctx.db
      .query("notifications")
      .filter((q) => q.eq(q.field("clerkId"), userId.subject))
      .filter((q) => q.eq(q.field("read"), false))
      .collect();

    for (const notification of unreadNotifications) {
      await ctx.db.patch(notification._id, { read: true });
    }
  },
});

// create a nofication mutation

export const createNotification = mutation({
  args: {
    clerkId: v.string(),
    message: v.string(),
    type: v.string(),
    read: v.boolean()
  },
  handler: async (ctx, args) => {
    //convex query function
    const message = await ctx.db.insert("notifications", {
      clerkId: args.clerkId,
      message: args.message,
      type: args.type,
      read: args.read
    })
    return message
  }
})
