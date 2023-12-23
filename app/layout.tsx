import '../styles/globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
    metadataBase: new URL('https://aungpyaephyoe.vercel.app'),
    title: {
        default: 'Next APp',
        template: '%s | Aung Pyae Phyo',
    },
    icons: [{ rel: 'icon', url: '/fav.png' }],
    description: 'Experienced Frontend developer',
    openGraph: {
        title: 'Aung Pyae Phyo',
        description: 'Experienced Frontend developer',
        url: 'https://aungpyaephyoe.vercel.app',
        siteName: 'Aung Pyae Phyo',
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    twitter: {
        title: 'Aung Pyae Phyo',
        card: 'summary_large_image',
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='en'>
            <body
                className={`${GeistMono.className} w-full bg-slate-950 leading-relaxed selection:bg-teal-300 selection:text-teal-900`}
                suppressHydrationWarning
            >
                {children}
                <Analytics mode={'production'} />
                <SpeedInsights />
            </body>
        </html>
    );
}
