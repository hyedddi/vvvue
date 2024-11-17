import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import pluginPrettier from 'eslint-plugin-prettier';

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
                    printWidth: 85,
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
    {
        languageOptions: { globals: globals.browser },
    },
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/essential'],
];
