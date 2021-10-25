# Progress 进度条(直线)

### 基本用法

::: demo

```html
<template>
  <div class="screen-line-progress-box">
    <screen-line-progress :percent="30" width="400px" border-radius="5px" :height="10"> </screen-line-progress>
    <screen-line-progress :percent="50" :height="10" width="400px" border-radius="5px" bg-color="#fcd7c1" active-color="#ff9453"> </screen-line-progress>
    <screen-line-progress :percent="80" :height="10" width="400px" bg-color="#a3e9f0" active-color="#02c6d9" border-radius="0"> </screen-line-progress>
  </div>
</template>
```

:::

### Attributes

|     参数     |     说明     |  类型  | 可选值 |                   默认值                    |
| :----------: | :----------: | :----: | :----: | :-----------------------------------------: |
|    width     |  进度条宽度  | number |   -    |                   400(px)                   |
|    height    |  进度条高度  | number |   -    |                   15(px)                    |
|   percent    |     占比     | number |   -    |                      0                      |
|   bgColor    |    背景色    | string |   -    |                   #005555                   |
| activeColor  |    前景色    | number |   -    | linear-gradient(to right, #006666, #00d099) |
| borderRadius |  进度条弧度  | string |   -    |               0 7.5px 7.5px 0               |
|     step     | 首次渲染速度 | number |   -    |                      4                      |

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
  .screen-line-progress-box{
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
    margin:0 auto;
    background: #061a3b;
    padding: 0 20px;
    box-sizing: border-box;
  }
</style>
