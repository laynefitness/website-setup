import { NextRequest, NextResponse } from "next/server";

const canonicalPaths: Record<string, string> = {
  "/Nutrition": "/nutrition",
  "/Fitness-Coaching": "/fitness-coaching",
  "/Peptides": "/peptides",
  "/About": "/about",
  "/Articles": "/articles",
};

export function proxy(request: NextRequest) {
  const canonicalPath = canonicalPaths[request.nextUrl.pathname];

  if (!canonicalPath) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = canonicalPath;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/Nutrition", "/Fitness-Coaching", "/Peptides", "/About", "/Articles"],
};
