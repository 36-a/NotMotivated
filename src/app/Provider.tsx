'use client';

import { ThemeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes/dist/types';
import { FC } from 'react';

export const Provider: FC<ThemeProviderProps> = props => {
    return <ThemeProvider {...props}>{props.children}</ThemeProvider>;
};
