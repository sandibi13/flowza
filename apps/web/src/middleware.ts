import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const publicRoutes = ["/", "/signup", "/signin"];
const protectedRoutes = ["/home", "/integrations", "/templates"];

export default async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRoute = protectedRoutes.includes(path);

  const sessionCookie = getSessionCookie(request);

  if (isPublicRoute && sessionCookie) {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  if (isProtectedRoute && !sessionCookie) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
