import type { Meta, StoryObj } from "@storybook/react";
import { Button, ThemeButton } from "./Button";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "shared/Button",
    component: Button,
    // parameters: {
    //     layout: "centered",
    // },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ["autodocs"],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    // argTypes: {
    //     backgroundColor: { control: "color" },
    // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ClearLight: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: "Button"
    },
};

export const ClearDark: Story = {
    args: {
        theme: ThemeButton.CLEAR,
        children: "Button"
    },
    decorators: [themeDecorator(Theme.DARK)]
};

export const OutlinedLight: Story = {
    args: {
        theme: ThemeButton.OUTLINED,
        children: "Button"
    },
};

export const OutlinedDark: Story = {
    args: {
        theme: ThemeButton.OUTLINED,
        children: "Button"
    },
    decorators: [themeDecorator(Theme.DARK)]
};
