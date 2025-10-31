// import { auth } from '@/auth';
// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export async function middleware(request: NextRequest) {
//   const session = await auth();

//   // Check if the request is for admin routes
//   if (request.nextUrl.pathname.startsWith('/admin')) {
//     // If no session, redirect to login
//     if (!session) {
//       return NextResponse.redirect(new URL('/auth/login', request.url));
//     }

//     // Check if user has admin or superuser role
//     const userRole = session.user?.role;
//     if (userRole !== 'admin' && userRole !== 'superuser') {
//       return NextResponse.redirect(new URL('/auth/unauthorized', request.url));
//     }
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ['/admin/:path*'],
// };
