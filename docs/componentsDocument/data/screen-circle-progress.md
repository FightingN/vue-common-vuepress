# Progress 进度条(环形)

### 基本用法

::: demo

```html
<div style="width: 100%; height: 200px; background: #061a3b; padding: 10px; box-sizing: border-box; display: flex; align-items: center; justify-content: space-around;">
  <screen-circle-progress width="100px" active-color="#f55f22" bg-color="#20348d" :lineWidth="5" :degreeStart="-90" :percent="90" :radius="50" com-key="1" :num="90"> </screen-circle-progress>
  <screen-circle-progress width="100px" active-color="#65dfe2" bg-color="#20348d" :lineWidth="5" :degreeStart="-90" :percent="50" :radius="50" comKey="2" :num="50"> </screen-circle-progress>
  <screen-circle-progress width="100px" active-color="#239cf9" bg-color="#20348d" :lineWidth="5" :degreeStart="-90" :percent="30" :radius="50" comKey="3" :num="30"> </screen-circle-progress>
</div>
```

:::

### Attributes

|    参数     |                     说明                     |  类型  | 可选值 | 默认值  |
| :---------: | :------------------------------------------: | :----: | :----: | :-----: |
|   comKey    |              唯一标识（必填项）              | string |   -    |    -    |
|    width    |                   容器大小                   | number |   -    | 100(px) |
|   radius    |                 进度条的宽度                 | number |   -    |  8(px)  |
|  lineWidth  |                    背景色                    | string |   -    | #005555 |
| activeColor |                    前景色                    | number |   -    |  #fff   |
|   bgColor   |                    背景色                    | string |   -    |  #666   |
|   percent   |                     占比                     | number |   -    |    0    |
| degreeStart | 开始角度（默认三点钟方向为 0，12 点钟为-90） | number |   -    |    0    |
|    step     |                 动画过渡速度                 | number |   -    |    2    |
|     num     |                  中心点数字                  | number |   -    |    0    |

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
