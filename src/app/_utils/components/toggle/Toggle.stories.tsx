import type { Meta, StoryFn } from '@storybook/react';
import { Toggle } from './Toggle';

/**
 * 色がわかりにくいため背景色をつけている<br>
 * https://storybook.js.org/docs/writing-stories/decorators
 */
const meta: Meta<typeof Toggle> = {
    title: 'utils/Toggle',
    component: Toggle,
    argTypes: {
        checked: {
            description: '親側から渡す。',
        },
    },
    decorators: [
        Story => (
            <div
                style={{
                    backgroundColor: '#7288CC',
                    width: '150px',
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Story />
            </div>
        ),
    ],
};

const Template: StoryFn<typeof Toggle> = args => <Toggle {...args} />;

export const UnChecked = Template.bind({});
UnChecked.args = {
    checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
    checked: true,
};

export default meta;
