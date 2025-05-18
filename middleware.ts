export { auth as middleware } from "@/auth";

export const config = {
  runtime: "nodejs", // Specify Node.js runtime
  matcher: [
    // Your matchers here
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
