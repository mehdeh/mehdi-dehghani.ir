import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const handleI18n = createMiddleware(routing);

function publicOrigin(request: NextRequest): string {
  const forwardedHost = request.headers
    .get("x-forwarded-host")
    ?.split(",")[0]
    ?.trim();
  const rawHost = forwardedHost || request.headers.get("host") || "";
  const host = rawHost.replace(/:3002$/, "");
  const proto =
    request.headers.get("x-forwarded-proto")?.split(",")[0]?.trim() || "http";

  if (!host || host.startsWith("127.") || host.startsWith("localhost")) {
    return "https://mehdi-dehghani.ir";
  }

  return `${proto}://${host}`;
}

export default function middleware(request: NextRequest) {
  const response = handleI18n(request);
  const location = response.headers.get("location");
  if (!location?.includes("://")) {
    return response;
  }

  const url = new URL(location);
  if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
    response.headers.set(
      "location",
      `${publicOrigin(request)}${url.pathname}${url.search}`,
    );
  }
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
