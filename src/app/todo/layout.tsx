'use client';

import { Suspense } from 'react';
import { Loading } from 'utils/components/loading/Loading';

export default function Layout({ children }: { children: React.ReactNode }) {
    if (process.env.NODE_ENV === 'development') {
        /* eslint-disable @typescript-eslint/no-floating-promises */

        (async function () {
            const { worker } = await import('mock/browser');
            await worker.start();
        })();

        /* eslint-enable @typescript-eslint/no-floating-promises */
    }

    return (
        <Suspense
            fallback={
                <div className="flex-center mx-auto mt-[30vh]">
                    <Loading />
                </div>
            }
        >
            <div>{children}</div>
        </Suspense>
    );
}
