import "@/app/styles/index.scss"
import { Theme, ThemeProvider } from "@/app/providers/ThemeProvider";
import { StoryFn } from "@storybook/react";

// eslint-disable-next-line react/display-name
export const themeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent/>
        </div>
    </ThemeProvider>
)

