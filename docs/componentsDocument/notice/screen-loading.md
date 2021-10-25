# Loading 加载

加载数据时显示动效

### 基本用法

::: demo

```html
<template>
  <div class="screen-loading">
    <screen-loading>
      <div class="loading-tip">
        加载中...
      </div>
    </screen-loading>
  </div>
</template>
<style>
  .screen-loading {
    width: 100%;
    height: 300px;
    background: #061a3b;
    /* background: black; */
  }
</style>
```

:::

### Slots

<table cellpadding="0" cellspacing="0">
  <thead>
    <th class="param">name</th>
    <th class="note">说明</th>
  </thead>
  <tbody>
    <tr>
      <td>匿名插槽</td>
      <td>用作loading文字提示（文字颜色默认白色）</td>
    </tr>
  </tbody>
</table>

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
