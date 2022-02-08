module.exports = {
  theme: '',
  title: 'VuePress + CommonUI',
  description: 'VuePress搭建CommonUI的组件库文档教程示例代码',
  base: '/vue-common-vuepress/',
  port: '8081',
  themeConfig: {
    nav: [
      // 配置顶部导航栏
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/componentsDocument/'
      }
    ],
    sidebar: {
      // 配置侧边栏部分
      // '/componentsDocument/': [
      //   '/componentsDocument/',
      //   '/componentsDocument/base/select.md',
      // ],
      '/componentsDocument/': [
        '/componentsDocument/',
        {
          title: 'Base组件',
          sidebarDepth: 2,
          children: [
            // {
            //   title: 'Select',
            //   path: '/componentsDocument/base/select.md'
            // },
            {
              title: 'Border边框',
              path: '/componentsDocument/base/screen-border-box.md'
            }
          ]
        },
        {
          title: 'Data组件',
          sidebarDepth: 2,
          children: [
            {
              title: 'Progress 进度条(直线)',
              path: '/componentsDocument/data/screen-line-progress.md'
            },
            {
              title: 'Progress 进度条(环形)',
              path: '/componentsDocument/data/screen-circle-progress.md'
            },
            {
              title: 'Progress 进度条(环形canvas)',
              path: '/componentsDocument/data/screen-circle-canvas.md'
            },
            {
              title: 'BatteryCharging 水波纹',
              path: '/componentsDocument/data/screen-battery-charging.md'
            },
            {
              title: 'Echarts ',
              path: '/componentsDocument/data/screen-chart.md'
            }
          ]
        },
        {
          title: 'Notice组件',
          sidebarDepth: 2,
          children: [
            {
              title: 'Loading加载',
              path: '/componentsDocument/notice/screen-loading.md'
            }
          ]
        },
        {
          title: 'Navigation组件',
          sidebarDepth: 2,
          children: [
            {
              title: 'Dropdown 下拉菜单',
              path: '/componentsDocument/navigation/screen-dropdown-menu.md'
            }
          ]
        }
      ]
    }
  },
  head: [],
  plugins: ['demo-container'],
  markdown: {}
}
