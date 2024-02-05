// import './src/tailwind.css';
import { Preview } from '@storybook/react';
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
};

export default preview;
