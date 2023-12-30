import type { Preview } from "@storybook/react";
import { styleDecorator } from "@/shared/config/storybook/styleDecorator";
import { themeDecorator } from "@/shared/config/storybook/themeDecorator";
import { Theme } from "@/app/providers/ThemeProvider";
import { routerDecorator } from "@/shared/config/storybook/routerDecorator";

const preview: Preview = {
    // parameters: {
    //     actions: { argTypesRegex: "^on[A-Z].*" },
    //     controls: {
    //         matchers: {
    //             color: /(background|color)$/i,
    //             date: /Date$/i,
    //         },
    //     },
    // },
    decorators: [
        styleDecorator,
        themeDecorator(Theme.LIGHT),
        routerDecorator
    ]
};

export default preview;
