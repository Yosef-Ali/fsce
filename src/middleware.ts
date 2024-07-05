import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware(
  { publicRoutes: ["/sign-in(.*)", "/sign-up(.*)", "/programs", "/about", "/contact", "/news-and-events", "/news-and-events/[slug]", "/api/generate"] }
);

export const config = {
  matcher: [
    "/((?!api|trpc|_next/static|_next/image|favicon.ico|.+\\.[\\w]+$).*)",
    "/",
    "/(api|trpc)(.*)"
  ],
};

