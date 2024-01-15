import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
    metadataBase: new URL('https://aungpyaephyo.vercel.app'),
    title: {
        default: 'Aung Pyae Phyo',
        template: '%s | Aung Pyae Phyo',
    },
    icons: [{ rel: 'icon', url: '/fav.png' }],
    description: 'Experienced Frontend developer',
    openGraph: {
        title: 'Aung Pyae Phyo',
        description: 'Experienced Frontend developer',
        url: 'https://aungpyaephyo.vercel.app',
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
                className={`${GeistSans.className} w-full bg-slate-900 leading-relaxed selection:bg-teal-300 selection:text-teal-900`}
                suppressHydrationWarning
            >
                {children}
                <Analytics mode={'production'} />
                <SpeedInsights />
            </body>
        </html>
    );
}
