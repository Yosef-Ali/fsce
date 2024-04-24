import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware(
  { publicRoutes: ["/", "/categories", "/about", "/contact"] }
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};