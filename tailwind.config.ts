import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.stories.{js,ts,jsx,tsx,mdx}'],
    darkMode: 'class',
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            main: '#7288CC',
            link: '#428DD9',
            danger: '#C32727',
            darkened: '#545D7B',
            light: {
                bg: '#F7F8FD',
                text: '#28292B',
                'code-bg': '#EAF4F7',
                code: '#28292B',
            },
            dark: {
                bg: '#545D7B',
                text: '#F7F8FD',
                'code-bg': '#3E4355',
                code: '#F7F8FD',
            },
        },
        screens: {
            xs: '430px',
            sm: '600px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        spacing: {
            '0': '0',
            '1': '1px',
            '2': '2px',
            '3': '3px',
            '4': '4px',
            '5': '5px',
            '8r': '0.5rem',
            '10': '10px',
            full: '100%',
        },
        fontFamily: {
            sans: ['var(--NotoSansJp)', 'sans-serif'],
            code: ['Menlo', 'Monaco'],
        },
        fontSize: {
            xs: ['0.625rem', { lineHeight: '1rem' }], //10px
            sm: ['0.75rem', { lineHeight: '1rem' }], // 12px
            base: ['0.875rem', { lineHeight: '1rem' }], // 14px
            lg: ['1rem', { lineHeight: '1.25rem' }], // 16px
            xl: ['1.125rem', { lineHeight: '1.25rem' }], // 18px
        },
        fontWeight: {
            normal: '400',
            bold: '700',
        },
        extend: {},
    },
    plugins: [],
};
export default config;
