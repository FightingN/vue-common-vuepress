import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import EScreen from 'e-screen'
// import 'e-screen/lib/e-screen.css'

// import CommonUI from 'vue-common-ui'
import 'vue-common-ui/lib/vue-common-ui.css'
export default async ({ Vue }) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    // Vue.use(EScreen)
    // Vue.use(CommonUI)
    // 解决引入自己组件报错document未找到的问题
    Vue.mixin({
      mounted() {
        import('vue-common-ui').then(function(m) {
          Vue.use(m.default)
        })
      }
    })
  }
}
