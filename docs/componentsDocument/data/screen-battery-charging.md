# BatteryCharging 水波纹

### 基本用法

::: demo

```html
<div style="width: 100%; height: 200px; background: #061a3b; padding: 10px; box-sizing: border-box; display: flex; align-items: center; justify-content: space-around;">
  <screen-battery-charging :percent="20" :width="150">
    <div class="slot-box">
      <div>20%</div>
      <div>百分比</div>
    </div>
  </screen-battery-charging>
  <screen-battery-charging :percent="50" :width="150" color="#02c6d9">
    <div class="slot-box">
      <div>50%</div>
      <div>百分比</div>
    </div>
  </screen-battery-charging>
  <screen-battery-charging :percent="80" :width="150" color="#aa4101">
    <div class="slot-box">
      <div>80%</div>
      <div>百分比</div>
    </div>
  </screen-battery-charging>
</div>
<style>
  .slot-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .slot-box div:nth-child(1) {
    color: #fff;
    font-size: 20px;
  }
  .slot-box div:nth-child(2) {
    color: #fff;
    font-size: 26px;
  }
</style>
```

:::

### Attributes

|  参数   |     说明     |  类型  | 可选值 | 默认值  |
| :-----: | :----------: | :----: | :----: | :-----: |
| percent |     占比     | number |   -    |    0    |
|  color  |   整体颜色   | string |   -    | #0bd5be |
|  width  | 水波纹的宽高 | number |   -    |   200   |

### Slots

|   name   |         说明         |
| :------: | :------------------: |
| 匿名插槽 | 用作水波纹的提示文字 |

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
