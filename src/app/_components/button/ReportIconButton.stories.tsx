import type { Meta, StoryObj } from '@storybook/react';
import { ReportIconButton } from './ReportIconButton';

const meta: Meta<typeof ReportIconButton> = {
    title: 'Home/ReportIconButton',
    component: ReportIconButton,
    argTypes: {
        onClick: {
            control: false,
        },
    },
};

type Story = StoryObj<typeof ReportIconButton>;

export const Default: Story = {};

export default meta;
