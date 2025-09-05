import { NextResponse } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - any assets in the /public folder
     */
    '/((?!api|_next/static|_next/image|favicon.ico|data|Icon|DBS_Background.jpg|DBS_Icon.png|DBS_Icon2.jpg|DBS_Icon3.jpg|DHL_logo_rgb_black.svg|Server.jpg).*)',
  ],
};

export function middleware(request) {
  if (process.env.MAINTENANCE_MODE === 'on') {
    return NextResponse.rewrite(new URL('/maintenance.html', request.url));
  }

  return NextResponse.next();
}
