import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "shared/AppLink",
    component: AppLink,
    tags: ["autodocs"],
    args: {
        to: "/"
    }
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY
    }
};

export const PrimaryDark: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.PRIMARY
    },
    decorators: [themeDecorator(Theme.DARK)]
};

export const InvertedLight: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.INVERTED
    },
};

export const InvertedDark: Story = {
    args: {
        children: "Text",
        theme: AppLinkTheme.INVERTED
    },
    decorators: [themeDecorator(Theme.DARK)]
};
