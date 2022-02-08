import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import CommonUI from 'vue-common-ui'
import 'vue-common-ui/lib/vue-common-ui.css'
export default async ({ Vue }) => {
  if (typeof process === 'undefined') {
    Vue.use(ElementUI)
    // Vue.use(CommonUI)
    // 解决打包时引入自己组件报错document未找到的问题
    // Vue.mixin({
    //   created() {
    //     import('vue-common-ui').then(function(m) {
    //       Vue.use(m.default)
    //     })
    //   }
    // })
    /**** 上述写法在页面刷新时,会找不到注册的组件 ******/
    /******************改成下面的写法后页面刷新问题就不存在了 *************/
    import('vue-common-ui').then(function(m) {
      Vue.use(m.default)
    })
  }
}
