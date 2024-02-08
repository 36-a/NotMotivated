import { Preview, ReactRenderer } from '@storybook/react';
import React from 'react';
import MyTheme from './nm';
import { ThemeProvider } from 'next-themes';
import { withThemeByClassName } from '@storybook/addon-themes';
// Tailwind CSS
import '../src/app/globals.css';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        layout: 'centered',
        docs: {
            source: {
                type: 'code',
            },
            theme: MyTheme,
        },
        backgrounds: {
            default: 'light',
            values: [
                {
                    name: 'light',
                    value: '#F7F8FD',
                },
                {
                    name: 'dark',
                    value: '#545D7B',
                },
            ],
        },
    },
    decorators: [
        withThemeByClassName<ReactRenderer>({
            themes: {
                light: '',
                dark: 'dark',
            },
            defaultTheme: 'light',
        }),
    ],
    /*
    decorators: [
        (Story, context) => {
            return (
                <ThemeProvider attribute="class">
                    <Story />
                </ThemeProvider>
            );
        },
    ],
    */
};

export default preview;
