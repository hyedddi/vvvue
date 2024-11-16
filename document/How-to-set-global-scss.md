# 전역 Scss 설정하는 방법

Vue3 + Vite 환경에서 SCSS를 전역적으로 불러와 사용하기 위해서는 아래와 같이 설정하시면 된다.

  1. vite.config.js

  ```javascript
  import { fileURLToPath, URL } from 'node:url';

  import { defineConfig } from 'vite';
  import vue from '@vitejs/plugin-vue';
  import vueDevTools from 'vite-plugin-vue-devtools';

  export default defineConfig({
      server: { // 서버의 port 를 설정하는 부분
          port: 3000
      },
      plugins: [vue(), vueDevTools()],
      resolve: {
          alias: {
              '@': fileURLToPath(new URL('./src', import.meta.url))
          }
      },
      scss: { // 빌드 시 CSS 전처리기에 대한 옵션을 정의
          preprocessorOptions: {
              scss: {
                  additionalData: '@import "./src/assets/scss/style";'
              }
          }
      }
  });

  ```

`css.preprocessorOptions` 설정은 CSS 전처리기에 대한 옵션을 정의하는 부분이다. 위에서 작성한 `addtionalData` 옵션은 모든 SCSS/Sass 파일의 시작 부분에 자동으로 추가될 코드를 지정한다. 위의 설정에서는 `@import "./src/assets/scss/style";`를 모든 `SCSS` 파일에 자동으로 주입하도록 설정되어 있습니다.

관련 레퍼런스는 다음을 참조할 수 있다.
- https://vite.dev/config/shared-options.html#css-preprocessoroptions
- https://vite.dev/guide/features.html#css-pre-processors


2. style.scss

```scss
@import './reset.scss';
@import './fonts.scss';
@import './variables.scss';
@import './mixin.scss';
@import './layout.scss';
@import './common.scss';

```

`import` 문에서 실제 디렉토리의 이름과 다른 것을 확인할 수 있다(예 `_fonts.scss`). 이는 `SCSS`의 `_`는 `partial` 파일임을 나타내는 `prefix`이기 때문이다. `Partial`은 다른 `Sass` 파일에서 `import`할 수 있는 `CSS/SCSS` 조각 파일을 의미한다. 그렇기 때문에 언더스코어로 시작하는 파일은 `CSS`로 독립적으로 컴파일되지 않는다. 이는 해당 파일이 다른 `SCSS` 파일에 포함되어야 하는 부분적인 코드 조각임을 컴파일러에게 알려주는 역할을 한다.

관련 레퍼런스는 다음을 참조할 수 있다.
- https://www.geeksforgeeks.org/why-to-put-_-in-front-of-filename-in-scss/