import { unsealData } from "iron-session";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SessionData } from "./models";

const password = process.env.IRON_SESSION_PASSWORD as string;
const defaultAdminRoles = [1, 2, 3];

export async function middleware(request: NextRequest) {
  const encryptedSession = request.cookies.get("auth_session_lx")?.value;
  if (!encryptedSession)
    return NextResponse.redirect(new URL("/", request.url));

  const session: SessionData = JSON.parse(
    (await unsealData(encryptedSession, {
      password: password,
    })) as string
  ) as SessionData;

  if (!session) return NextResponse.redirect(new URL("/", request.url));
  if (!defaultAdminRoles.includes(session.user.role.code))
    return NextResponse.redirect(new URL("/", request.url));

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
