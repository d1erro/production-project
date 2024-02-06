import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";

const meta = {
    title: "shared/Modal",
    component: Modal,
    tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "Ab aliquid amet at autem cupiditate delectus deserunt ducimus enim impedit " +
            "incidunt iste magni maxime molestias non numquam quae reiciendis totam, voluptatem."

    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. " +
            "Ab aliquid amet at autem cupiditate delectus deserunt ducimus enim impedit " +
            "incidunt iste magni maxime molestias non numquam quae reiciendis totam, voluptatem."

    },
    decorators: [themeDecorator(Theme.DARK)]
};