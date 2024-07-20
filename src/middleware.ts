import { unsealData } from "iron-session";
import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
import { SessionData } from "./models";

const password = process.env.IRON_SESSION_PASSWORD as string;

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  if (!request.cookies.has("auth_session"))
    return NextResponse.redirect(new URL("/", request.url));
  const encryptedSession = request.cookies.get("auth_session")?.value;
  if (!encryptedSession)
    return NextResponse.redirect(new URL("/", request.url));

  const session: SessionData = JSON.parse(
    (await unsealData(encryptedSession, {
      password: password,
    })) as string
  ) as SessionData;

  if (!session) return NextResponse.redirect(new URL("/", request.url));
  if (session.user.role.code !== 2)
    return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
