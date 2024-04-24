import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  posts: defineTable({
    title: v.string(),
    slug: v.string(),
    image: v.string(),
    author: v.string(),
    body: v.string(),
    categories: v.string(),
  })

})

