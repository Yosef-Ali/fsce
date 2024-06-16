
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    clerkId: v.string(), // The unique ID of the user in Clerk
    email: v.string(), // The user's email address from Clerk
    name: v.string(), // The user's full name from Clerk
    imageUrl: v.string(), // The URL of the user's profile image from Clerk
    role: v.string(), // Add a role field
  }),
  posts: defineTable({
    title: v.string(),
    slug: v.string(),
    image: v.string(),
    body: v.string(),
    categories: v.string(),
    author: v.object({ clerkId: v.string() }), // Change the type of the author field
  }),
});


