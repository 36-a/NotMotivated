import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata } from 'next';
import { Provider } from './Provider';
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
            suppressHydrationWarning
        >
            {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
            <body className={`${Font.variable} font-sans`}>
                <Provider
                    attribute="class"
                    defaultTheme="light"
                >
                    <Header />
                    {children}
                </Provider>
                <SpeedInsights />
            </body>
        </html>
    );
}
