import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundPage } from "./NotFoundPage";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    tags: ["autodocs"],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)]
};
