import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware(
  { publicRoutes: ["/", "/programs", "/about", "/contact", "/news-and-events"] }
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};