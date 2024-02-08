import { useCallback, useState } from 'react';
import { useTheme } from 'next-themes';

export const useDisplayMode = () => {
    const [isDark, setIsDark] = useState(false);
    const { theme, setTheme } = useTheme();

    const changeMode = useCallback(() => {
        setIsDark(prevIsDark => !prevIsDark);
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme, setTheme]);

    return { isDark, changeMode };
};
