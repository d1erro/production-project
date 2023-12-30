module.exports = {
    root: true,
    ignorePatterns: [".eslintrc.js", "node_modules", "build/**/*.js"],
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:jest-dom/recommended",
        "plugin:storybook/recommended"
    ],
    parser: "@typescript-eslint/parser",
    overrides: [
        {
            files: ["**/src/**/*.test.{ts,tsx}"],
            rules: {
                "i18next/no-literal-string": "off",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint",
        "react",
        "i18next",
        "jest-dom",
        "@stylistic/ts",
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/indent": ["error", 4],
        "object-curly-spacing": ["error", "always"],
        "quotes": ["error", "double", {
            "avoidEscape": true, "allowTemplateLiterals": true
        }],
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/naming-convention": "off",
        "jest-dom/prefer-checked": "error",
        "jest-dom/prefer-enabled-disabled": "error",
        "jest-dom/prefer-required": "error",
        "jest-dom/prefer-to-have-attribute": "error",
        "i18next/no-literal-string": [
            "error",
            {
                markupOnly: true,
                ignoreAttribute: ["data-testid", "to"],
            },
        ],
    },
    globals: {
        __IS_DEV__: true
    }
}