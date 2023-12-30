import type { Meta, StoryObj } from "@storybook/react";
import { PageError } from "./PageError";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "widgets/PageError",
    component: PageError,
    tags: ["autodocs"],
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};

export const Dark: Story = {
    decorators: [themeDecorator(Theme.DARK)]
};
