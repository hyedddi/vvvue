import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        files: ['**/*.{js,mjs,cjs,vue}'],
        plugins: {
            prettier: pluginPrettier, // 추가
        },
        rules: {
            'no-console': 'off',
            'vue/html-self-closing': [
                'warn',
                {
                    html: {
                        void: 'always',
                        normal: 'never',
                        component: 'always',
                    },
                    svg: 'always',
                    math: 'always',
                },
            ],
            'prettier/prettier': [
                'error',
                {
                    singleQuote: true,
                    semi: true,
                    useTabs: false,
                    tabWidth: 4,
                    trailingComma: 'all',
                    printWidth: 100,
                    bracketSpacing: true,
                    arrowParens: 'always',
                    endOfLine: 'auto',
                    bracketSameLine: false,
                    singleAttributePerLine: true,
                    htmlWhitespaceSensitivity: 'css',
                },
            ],
        },
    },
    ...
];