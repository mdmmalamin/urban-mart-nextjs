import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { getCurrentUser } from "./services/AuthServices";

const AuthRoutes = ["/login", "/register"];

type Role = keyof typeof roleBasedRoutes;

const roleBasedRoutes = {
  CUSTOMER: [/^\/user/, /^\/cart/, /^\/shipping/],
  VENDOR: [/^\/vendor/],
  ADMIN: [/^\/admin/],
  SUPER_ADMIN: [/^\/admin/],
};

//? This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // console.log(pathname);

  const user = await getCurrentUser();

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url),
      );
    }
  }

  if (user?.role && roleBasedRoutes[user?.role as Role]) {
    const routes = roleBasedRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

//? See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/user",
    "/user/:page*",
    "/vendor",
    "/vendor/:page*",
    "/admin",
    "/admin/:page*",
    "/login",
    "/register",
    "/cart",
    "/shipping",
  ],
};
