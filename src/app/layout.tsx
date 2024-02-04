import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata } from 'next';
import './globals.css';
import { Font } from 'utils/Font';
import { Header } from 'utils/components/Header';

export const metadata: Metadata = {
    title: 'Not Motivated',
    description: 'my todo management tool',
    robots: {
        index: false,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
            <body className={`${Font.variable} bg-white font-sans dark:bg-darkened`}>
                <Header />
                {children}
                <SpeedInsights />
            </body>
        </html>
    );
}
