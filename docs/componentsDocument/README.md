# 安装

## npm 安装

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

```js
npm i vue-common-ui
```

## 快速上手

### 引入 CommonUI

- 在 main.js 中引入

```js
import Vue from 'vue'
import CommonUI from 'vue-common-ui'
import 'vue-common-ui/lib/vue-common-ui.css'
import App from './App.vue'

Vue.use(CommonUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```
