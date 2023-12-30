import "@/app/styles/index.scss"
import { Theme } from "@/app/providers/ThemeProvider";
import { StoryFn } from "@storybook/react";

// eslint-disable-next-line react/display-name
export const themeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent/>
    </div>
)

