import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "widgets/Navbar",
    component: Navbar,
    tags: ["autodocs"],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)]
};
