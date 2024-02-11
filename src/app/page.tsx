'use client';

import { useRouter } from 'next/navigation';
import { ReportIconButton } from './_components/button/ReportIconButton';
import { TodoIconButton } from './_components/button/TodoIconButton';

export default function Home() {
    const router = useRouter();
    return (
        <div className="flex-center mt-[30vh] gap-[20px]">
            <ReportIconButton
                onClick={() => {
                    console.log('Report clicked!');
                }}
            />
            <TodoIconButton
                onClick={() => {
                    router.push('/todo');
                }}
            />
        </div>
    );
}
