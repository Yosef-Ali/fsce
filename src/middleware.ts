import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware(
  { publicRoutes: ["/sign-in(.*)", "/sign-up(.*)", "/programs", "/about", "/contact", "/news-and-events", "/news-and-events/[slug]"] }
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)", "/"],
};

