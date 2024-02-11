import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata } from 'next';
import './globals.css';
import { Font } from 'utils/Font';
import { Header } from 'utils/components/header/Header';

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
        <html
            lang="ja"
            // suppressHydrationWarning
        >
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
            <body className={`${Font.variable} font-sans`}>
                <Header />
                <main className="mx-auto mt-[15px] min-w-[360px] max-w-[80%]">{children}</main>
                <SpeedInsights />
            </body>
        </html>
    );
}
