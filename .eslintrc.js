module.exports = {
    ignorePatterns: ["build", ".eslintrc.js"],
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        //"plugin:i18next/recommended",
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                ".eslintrc.{js,cjs}"
            ],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "react",
        "i18next",
    ],
    settings: {
        react: {
            version: "detect"
        }
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/indent': ["error", 4],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/space-before-function-paren': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/naming-convention': 'off',
    },
    globals: {
        __IS_DEV__: true
    }
}