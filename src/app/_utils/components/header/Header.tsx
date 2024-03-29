'use client';
import { useDisplayMode } from 'utils/useDisplayMode';
import { Toggle } from 'utils/components/toggle/Toggle';

export const Header = () => {
    const { isDark, changeMode } = useDisplayMode();
    return (
        <header className="mx-auto my-0 flex h-[70px] w-full items-center justify-end bg-main">
            <div className="mr-[30px] flex items-center">
                <Toggle
                    checked={isDark}
                    onChange={changeMode}
                />
            </div>
        </header>
    );
};
