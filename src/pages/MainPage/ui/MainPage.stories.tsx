import type { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "pages/MainPage",
    component: MainPage,
    tags: ["autodocs"],
} satisfies Meta<typeof MainPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)]
};
