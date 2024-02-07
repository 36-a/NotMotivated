import type { Meta, StoryFn } from '@storybook/react';

const short = `コードブロックの表示
0123456789 !?@#$%^&*:;'"/~+-=\,.
abcdefghijklmnopqrstuvwxyz
ABCDEFGHIJKLMNOPQRSTUVWXYZ
`;

const long = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

interface Props {
    example: string;
}
const Pre = ({ example }: Props) => {
    return (
        <pre>
            <code>{example}</code>
        </pre>
    );
};

const meta: Meta<typeof Pre> = {
    title: 'Example/Pre',
    component: Pre,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        Story => (
            <div
                style={{
                    width: '500px',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template: StoryFn<typeof Pre> = args => <Pre {...args} />;

/**
 * 短いコードブロックの表示
 */
export const ShortPre = Template.bind({});
ShortPre.args = {
    example: short,
};

/**
 * 長いコードブロックの表示
 */
export const LongPre = Template.bind({});
LongPre.args = {
    example: long,
};

export default meta;
