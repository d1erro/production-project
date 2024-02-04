import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonSize, ButtonTheme } from "./Button";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "shared/Button",
    component: Button,
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: "Button"
    },
};

export const ClearDark: Story = {
    args: {
        theme: ButtonTheme.CLEAR,
        children: "Button"
    },
    decorators: [themeDecorator(Theme.DARK)]
};

export const Outlined: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: "Button"
    },
};

export const OutlinedSizeL: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: "Button",
        size: ButtonSize.L
    },
};

export const OutlinedSizeXL: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: "Button",
        size: ButtonSize.XL
    },
};

export const OutlinedDark: Story = {
    args: {
        theme: ButtonTheme.OUTLINED,
        children: "Button"
    },
    decorators: [themeDecorator(Theme.DARK)]
};

export const Background: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND,
        children: "Button"
    },
};

export const BackgroundInverted: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: "Button"
    },
};

export const SquareSizeM: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: ">",
        square: true,
        size: ButtonSize.M
    },
};

export const SquareSizeL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: ">",
        square: true,
        size: ButtonSize.L
    },
};

export const SquareSizeXL: Story = {
    args: {
        theme: ButtonTheme.BACKGROUND_INVERTED,
        children: ">",
        square: true,
        size: ButtonSize.XL
    },
};
