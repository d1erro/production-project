import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "widgets/ThemeSwitcher",
    component: ThemeSwitcher,
    tags: ["autodocs"],
    parameters: {
        localStorage: {
            theme: "light"
        }
    }
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThemeSwitcherLight: Story = {
};

export const ThemeSwitcherDark: Story = {
    decorators: [themeDecorator(Theme.DARK)]
};