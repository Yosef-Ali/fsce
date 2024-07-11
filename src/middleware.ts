import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: [
    "/sign-in(.*)",
    "/sign-up(.*)",
    "/programs",
    "/about",
    "/contact",
    "/news-and-events",
    "/news-and-events/(.*)",
    "/api/generate"
  ],
  afterAuth(auth, req, evt) {
    const url = new URL(req.url);
    const path = url.pathname;

    // Handle dynamic routes that should be public
    if (path.startsWith('/news-and-events/')) {
      return NextResponse.next();
    }

    // Add any other custom logic here
    // For example, you might want to allow access to certain dashboard routes for authenticated users
    if (path.startsWith('/dashboard/') && !auth.userId) {
      return redirectToSignIn({ returnBackUrl: req.url });
    }

    // Allow the request to continue
    return NextResponse.next();
  }
});

export const config = {
  matcher: [
    "/((?!api|trpc|_next/static|_next/image|favicon.ico|.+\\.[\\w]+$).*)",
    "/",
    "/(api|trpc)(.*)"
  ],
};