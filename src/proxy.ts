import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Metadata routes (icon, opengraph-image) must stay unlocalized, otherwise
  // next-intl rewrites them to /:locale/... and they 404.
  matcher:
    "/((?!api|trpc|_next|_vercel|icon$|apple-icon$|opengraph-image$|twitter-image$|.*\\..*).*)",
};
