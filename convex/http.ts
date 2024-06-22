import type { WebhookEvent } from "@clerk/nextjs/server";
import { httpRouter } from "convex/server";
import { Webhook } from "svix";

import { internal } from "./_generated/api";
import { httpAction } from "./_generated/server";

// Define the allowed user roles
type UserRole = "author" | "user" | "admin" | "org:admin";

// Function to map Clerk roles to your application roles
function mapClerkRoleToUserRole(clerkRole: string): UserRole {
  switch (clerkRole.toLowerCase()) {
    case "admin":
      return "admin";
    case "author":
      return "author";
    case "org:admin":
      return "org:admin";
    default:
      return "user";
  }
}

const handleClerkWebhook = httpAction(async (ctx, request) => {
  const event = await validateRequest(request);
  if (!event) {
    return new Response("Invalid request", { status: 400 });
  }
  switch (event.type) {
    case "user.created":
      await ctx.runMutation(internal.users.createUser, {
        clerkId: event.data.id as string,
        email: event.data.email_addresses[0].email_address,
        imageUrl: event.data.image_url,
        name: event.data.first_name!,
        role: "user", // Default role
        active: "inactive",
      });
      break;
    case "user.updated":
      await ctx.runMutation(internal.users.updateUserInternally, {
        clerkId: event.data.id,
        email: event.data.email_addresses[0].email_address,
        imageUrl: event.data.image_url,
        name: event.data.first_name || "Unknown",
      });
      break;
    case "user.deleted":
      await ctx.runMutation(internal.users.deleteUserInternally, {
        clerkId: event.data.id as string,
      });
      await ctx.runMutation(internal.organizations.removeMember, {
        userId: event.data.id as string,
      });
      break;
    case "organizationMembership.created":
      await ctx.runMutation(internal.organizations.addMember, {
        organizationId: event.data.organization.id,
        userId: event.data.public_user_data.user_id,
        role: mapClerkRoleToUserRole(event.data.role)
      });
      break;
    case "organizationMembership.updated":
      const mappedRole = mapClerkRoleToUserRole(event.data.role);
      await ctx.runMutation(internal.organizations.updateMember, {
        userId: event.data.public_user_data.user_id,
        role: mappedRole
      });
      await ctx.runMutation(internal.users.updateUserRoleInternal, {
        clerkId: event.data.public_user_data.user_id,
        userRole: mappedRole
      });
      break;
    case "organizationMembership.deleted":
      await ctx.runMutation(internal.organizations.removeMember, {
        userId: event.data.public_user_data.user_id,
      });
      await ctx.runMutation(internal.users.deleteUserInternally, {
        clerkId: event.data.public_user_data.user_id,
      });
      break;
    default:
      console.log("Unhandled event type:", event.type);
  }
  return new Response(null, {
    status: 200,
  });
});

const http = httpRouter();

http.route({
  path: "/clerk",
  method: "POST",
  handler: handleClerkWebhook,
});

const validateRequest = async (
  req: Request
): Promise<WebhookEvent | undefined> => {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET!;
  if (!webhookSecret) {
    throw new Error("CLERK_WEBHOOK_SECRET is not defined");
  }
  const payloadString = await req.text();
  const headerPayload = req.headers;
  const svixHeaders = {
    "svix-id": headerPayload.get("svix-id")!,
    "svix-timestamp": headerPayload.get("svix-timestamp")!,
    "svix-signature": headerPayload.get("svix-signature")!,
  };
  const wh = new Webhook(webhookSecret);
  const event = wh.verify(payloadString, svixHeaders);
  return event as unknown as WebhookEvent;
};

export default http;