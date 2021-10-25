# Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

### 基本用法

::: demo

```html
<template>
  <div class="screen-dropdown-menu-box">
    <screen-dropdown-menu :menuList="options1" width="40%" height="40px" defaultSelected="2" top="40px"></screen-dropdown-menu>
    <screen-dropdown-menu :menuList="options2" width="40%" height="40px"></screen-dropdown-menu>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options1: [
          {
            value: '1',
            label: '选项1'
          },
          {
            value: '2',
            label: '选项2'
          },
          {
            value: '3',
            label: '选项3'
          },
          {
            value: '4',
            label: '选项3'
          },
          {
            value: '5',
            label: '选项3'
          },
          {
            value: '6',
            label: '选项3'
          }
        ],
        options2: [
          {
            value: '1',
            label: '选项1'
          },
          {
            value: '2',
            label: '选项2'
          }
        ]
      }
    }
  }
</script>
```

:::

### Attributes

|      参数       |          说明          |  类型  | 可选值 | 默认值  |
| :-------------: | :--------------------: | :----: | :----: | :-----: |
|      width      |        组件宽度        | String |   -    |  100%   |
|     height      |        组件高度        | String |   -    | 30(px)  |
|    menuList     |        下拉选项        | Array  |   -    |    -    |
| defaultSelected |   下拉框默认选中的项   | String |   1    | #005555 |
|       top       | 展开样式距离顶部的距离 | String |   -    |  40px   |

<style>
  table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 20px;
    display: table;
  }
  table thead,  table tbody {
    width:100%;
    border-color: inherit;
  }
  table thead td, table tbody td {
    max-width: 250px;
  }
  table th {
    text-align: left;
    white-space: nowrap;
    color: #909399;
    font-weight: 400;
  }
  table td, table th {
    padding: 15px;
    max-width: 250px;

  }
  .screen-dropdown-menu-box {
    box-sizing:border-box;
    width: 100%;
    height: 200px;
    background: #061a3b;
    border-radius: 3px;
    padding:20px;
    display:flex;
    align-items: flex-start;
    justify-content: space-between;
  
  }
</style>
