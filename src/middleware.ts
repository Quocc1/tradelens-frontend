import type { NextFetchEvent, NextRequest } from 'next/server';
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './libs/i18n/routing';

const intlMiddleware = createMiddleware(routing);

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/:locale/dashboard(.*)',
]);

const isAuthPage = createRouteMatcher([
  '/sign-in(.*)',
  '/:locale/sign-in(.*)',
  '/sign-up(.*)',
  '/:locale/sign-up(.*)',
]);

const supportedLocales = ['en', 'vi'] as const;

export default function middleware(
  request: NextRequest,
  event: NextFetchEvent,
) {
  const pathname = request.nextUrl.pathname;
  const pathSegments = pathname.split('/').filter(Boolean);

  // Handle root path '/' and locale paths
  if (pathname === '/' || (pathSegments.length === 1 && /^\/[a-z]{2}$/.test(pathname))) {
    const locale = pathname === '/' ? 'en' : pathname.slice(1); // Default to 'en' for root
    const targetLocale = supportedLocales.includes(locale as any) ? locale : 'en';
    const dashboardUrl = new URL(`/${targetLocale}/dashboard`, request.url);
    return Response.redirect(dashboardUrl);
  }

  // Handle unsupported locales with dashboard (e.g., '/es/dashboard')
  if (pathSegments.length >= 2) {
    const attemptedLocale = pathSegments[0];
    if (!supportedLocales.includes(attemptedLocale as any)) {
      const dashboardUrl = new URL(`/en/${pathSegments.pop()}`, request.url);
      return Response.redirect(dashboardUrl);
    }
  }

  // Run Clerk middleware only when necessary
  if (isAuthPage(request) || isProtectedRoute(request)) {
    return clerkMiddleware(async (auth, req) => {
      if (isProtectedRoute(req)) {
        const locale
          = req.nextUrl.pathname.match(/(\/.*)\/dashboard/)?.at(1) ?? '';
        const signInUrl = new URL(`${locale}/sign-in`, req.url);

        await auth.protect({
          unauthenticatedUrl: signInUrl.toString(),
        });
      }

      return intlMiddleware(req);
    })(request, event);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    '/((?!_next|monitoring|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
