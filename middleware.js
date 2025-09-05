export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - maintenance.html (the maintenance page itself)
     */
    '/((?!_next/static|_next/image|favicon.ico|maintenance.html).*)',
  ],
};

export function middleware(request) {
  if (process.env.MAINTENANCE_MODE === 'on') {
    const url = request.nextUrl.clone();
    url.pathname = '/maintenance.html';
    return Response.redirect(url);
  }
}