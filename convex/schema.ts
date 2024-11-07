
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    imageUrl: v.string(),
    clerkId: v.string(),
    name: v.string(),
    active: v.union(v.literal("active"), v.literal("inactive")),
    tokenIdentifier: v.optional(v.string()),
    role: v.union(v.literal("user"), v.literal("author"), v.literal("admin"), v.literal("org:admin")),
  })
    .index("by_token", ["tokenIdentifier"])
    .index("by_clerkId", ["clerkId"]),

  organizations: defineTable({
    organizationId: v.string(),
    userId: v.string(),
    role: v.string(),
  }).index("by_userId", ["userId"])
    .index("by_organizationId", ["organizationId"]),

  posts: defineTable({
    title: v.string(),
    slug: v.string(),
    image: v.optional(v.string()),
    content: v.any(),
    excerpt: v.string(),
    status: v.union(v.literal("draft"), v.literal("published"), v.literal("archived")),
    category: v.string(),
    author: v.object({
      id: v.string(),
      name: v.string(),
      image: v.string(),
    }),
    updatedAt: v.number()
  })
    .index("by_title", ["title"])
    .index("by_status", ["status"])
    .index("by_category", ["category"])
    .index("by_author", ["author.id"])
    .index("by_slug", ["slug"])
    .searchIndex("search_content", {
      searchField: "content",
      filterFields: ["status"]
    }),

  notifications: defineTable({
    clerkId: v.string(),
    message: v.string(),
    type: v.string(),
    read: v.boolean(),
  }).index("by_clerkId", ["clerkId"])
    .index("by_read", ["read"]),

  // In schema.ts
  categories: defineTable({
    title: v.string(),
    description: v.string(),
    slug: v.string() // Add missing field
  })
    .index("by_slug", ["slug"]),// Add index for slug field

  documents: defineTable({
    title: v.string(),
    content: v.any(), // This will store the Novel editor's JSON content
    createdAt: v.number(),
    updatedAt: v.number(),
    authorId: v.string(), // Assuming you have user authentication
  })
    .index("by_createdAt", ["createdAt"])
    .index("by_authorId", ["authorId"])
});




