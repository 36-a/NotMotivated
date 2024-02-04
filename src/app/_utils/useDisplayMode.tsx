import { useCallback, useEffect, useState } from 'react';

export const useDisplayMode = () => {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        setIsDark(
            localStorage.theme === 'dark' ||
                (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
        );
    }, []);

    const changeMode = useCallback(() => {
        setIsDark(prevIsDark => !prevIsDark);
    }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [isDark]);

    return { isDark, changeMode };
};
