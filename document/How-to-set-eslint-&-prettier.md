# Eslint & Prettier 적용 방법

1. eslint.config.js

```javascript
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
```

`plugins`에 `pluginPrettier`를 추가해 준다. `pluginPrettier`는 `rules`에서 `prettier`의 `rule`을 사용할 수 있도록 도와준다. `rules`에서는 프로젝트에 적용할 린팅 규칙을 정의한다.

2. package.json

```json
    "lint": "eslint \"**/*.{ts,tsx,vue,js}\" --fix",
    "lint-eslint": "eslint --ignore-path .gitignore **/*{ts,tsx,vue,js,json} --fix",
    "lint-prettier": "prettier --write \"**/*.(ts|tsx|vue|js|json)\"",
```

`--fix` 옵션은 `npm run lint` 를 실행 시 자동으로 소스 코드를 수정해 주는 옵션이다.

3. vscode 혹은 cursor에서 코드 저장시 자동으로 eslint 를 적용하기 위해서 .vscode 폴더 하위에 settings.json 파일을 생성 후 아래의 코드를 복사 / 붙여넣기 한다.

```json
{
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "vue",
        "markdown"
    ],
    "eslint.enable": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },
    "editor.tabSize": 2
}
```

파일을 생성했다면 vscode 혹은 cursor를 재실행 후 린트가 소스코드를 적용하면 자동으로 적용되는 것을 확인할 수 있다.
