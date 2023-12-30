import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "shared/Loader",
    component: Loader,
    tags: ["autodocs"],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoaderLight: Story = {};

export const LoaderDark: Story = {
    decorators: [themeDecorator(Theme.DARK)]
};