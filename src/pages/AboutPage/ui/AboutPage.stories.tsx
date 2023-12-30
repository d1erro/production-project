import type { Meta, StoryObj } from "@storybook/react";
import AboutPage from "./AboutPage";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "pages/AboutPage",
    component: AboutPage,
    tags: ["autodocs"],
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)]
};
