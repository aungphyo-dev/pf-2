import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      if (isLoggedIn) {
        if (nextUrl.pathname.startsWith('/login')) {
          return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true;
      } else {
        if (nextUrl.pathname.startsWith('/dashboard')) {
          return Response.redirect(new URL('/login', nextUrl));
        }
        return true;
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
