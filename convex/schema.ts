
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    name: v.string(),
    active: v.union(v.literal("active"), v.literal("inactive")),
    role: v.union(v.literal("author"), v.literal("user"), v.literal("admin"), v.literal("org:admin")),
  }),

  organizations: defineTable({
    organizationId: v.string(),
    userId: v.string(),
    role: v.string(),
  }).index("by_userId", ["userId"])
    .index("by_organizationId", ["organizationId"]),

  posts: defineTable({
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
  }).index("by_authorId", ["authorId"])
    .index("by_slug", ["slug"])
    .index("by_published", ["published"])
    .index("by_categories", ["categories"])
    .index("by_title", ["title"]),

  notifications: defineTable({
    clerkId: v.string(),
    message: v.string(),
    type: v.string(),
    read: v.boolean(),
  }).index("by_clerkId", ["clerkId"])
    .index("by_read", ["read"]),

  categories: defineTable({
    title: v.string(),
    description: v.string(),
  }).index("by_title", ["title"]),

});


