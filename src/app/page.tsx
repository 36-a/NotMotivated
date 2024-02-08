'use client';

import { ReportIconButton } from './_components/button/ReportIconButton';
import { TodoIconButton } from './_components/button/TodoIconButton';

export default function Home() {
    return (
        <main>
            <div className="flex-center mt-[30vh] gap-10">
                <ReportIconButton
                    onClick={() => {
                        console.log('Report clicked!');
                    }}
                />
                <TodoIconButton
                    onClick={() => {
                        console.log('Todo clicked!');
                    }}
                />
            </div>
        </main>
    );
}
