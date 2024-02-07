import type { Meta, StoryFn, StoryObj } from '@storybook/react';

interface Props {
    example: string;
}
const Code = ({ example }: Props) => {
    return <code>{example}</code>;
};

const meta: Meta<typeof Code> = {
    title: 'Example/Code',
    component: Code,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        example: {
            control: 'text',
        },
    },
};

const Template: StoryFn<typeof Code> = args => <Code {...args} />;

export const ExampleCode = Template.bind({});
ExampleCode.args = {
    example: 'code span の表示',
};

export default meta;
