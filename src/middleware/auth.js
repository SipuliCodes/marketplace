import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const authMiddleware = async (req) => {
  const token = await getToken({ req });
  const url = req.nextUrl;

  if (token && url.pathname === "/") {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  if (!token && url.pathname.startsWith("/home")) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  return NextResponse.next()
} 