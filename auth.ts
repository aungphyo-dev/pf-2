import NextAuth, { User } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { AuthUserSchema, AuthUserType } from '@/types';
import supabase from '@/services/supabase';
declare module '@auth/core/types' {
    interface Session {
        user: AuthUserType & DefaultSession['user'];
    }
    interface User {
        id: string;
        role: string;
        jwt: string;
    }
}
declare module '@auth/core/jwt' {
    interface JWT {
        id: string;
        role: string;
        jwt: string;
    }
}
export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const { data, error } = await supabase.auth.signInWithPassword(
                    credentials as {
                        email: string;
                        password: string;
                    }
                );
                if (error === null) {
                    const {
                        user: { id, email, role },
                        session: { access_token },
                    } = data;
                    const validateFields = AuthUserSchema.safeParse({
                        id,
                        email,
                        role,
                        jwt: access_token,
                    });
                    if (!validateFields.success) return null;
                    return validateFields.data as User;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return {
                    ...token,
                    id: user.id,
                    email: user.email,
                    role: user.role,
                    jwt: user.jwt,
                };
            }
            return token;
        },
        async session({ session, token, user }) {
            if (token)
                return {
                    ...session,
                    user: {
                        id: token.id,
                        email: token.email,
                        role: token.role,
                        jwt: token.jwt,
                    },
                };
            return session;
        },
    },
    session: { strategy: 'jwt' },
});
