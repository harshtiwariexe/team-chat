import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  isAuthenticatedNextjs,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

const isSignInPage = createRouteMatcher(["/signin"]);

export default convexAuthNextjsMiddleware((request) => {
  const method = request.method;
  console.log(request);

  const isAuthenticated = isAuthenticatedNextjs();
  console.log("Is Authenticated: ", isAuthenticated);
  console.log("Is Sign In Page: ", isSignInPage(request));

  // Allow GET requests without side-effects
  if (method === "GET") {
    console.log("Allowing GET request without redirect");
    return;
  }

  // Redirect if not authenticated and the request isn't a GET or sign-in request
  if (!isSignInPage(request) && !isAuthenticated) {
    console.log("Redirecting to /signin");
    return nextjsMiddlewareRedirect(request, "/signin");
  }
});

convexAuthNextjsMiddleware();
export const config = {
  // The following matcher runs middleware on all routes except static assets
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
