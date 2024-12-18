import { authMiddleware } from "./middleware/auth";

export const middleware = (req) => {
  return authMiddleware(req);
}

export const config = {
  matcher: ["/", "/home"],
}