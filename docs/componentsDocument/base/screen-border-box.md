# Border 边框

### 基本用法

::: demo

```html
<template>
  <!-- 外层div仅用作展示最佳效果 -->
  <div style="width: 100%; height: 300px; background: #061a3b; border-radius: 4px;color:#fff;text-align:center;line-height:300px">
    <screen-border-box width="100%" height="300px">
      <div>内容</div>
    </screen-border-box>
  </div>
</template>
```

:::

### Attributes

|    参数     |    说明    |  类型  | 可选值 | 默认值  |
| :---------: | :--------: | :----: | :----: | :-----: |
|    width    | 盒子的宽度 | string |   -    |  100%   |
|   height    | 盒子的高度 | string |   -    |  100%   |
| borderWidth | 边角的宽度 | string |   -    |   3px   |
| borderColor | 边角的颜色 | string |   -    | #29cdff |
|  spanWidth  | 边角的长度 | string |   -    |   4px   |
| spanHeight  | 边角的高度 | string |   -    |   4px   |
|  lineColor  | 边框的颜色 | string |   -    | #005eb0 |

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
</style>
