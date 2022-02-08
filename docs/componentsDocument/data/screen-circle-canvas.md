# Progress 进度条(环形)

- 此版本使用了 dpr 解决了 canvas 失真问题,加入了数字动画功能

### 基本用法

::: demo

```html
<div style="width: 100%; height: 200px; background: #fff; padding: 10px; box-sizing: border-box; display: flex; align-items: center; justify-content: space-around;">
  <screen-circle-canvas> </screen-circle-canvas>
  <screen-circle-canvas :percentage="90" :lineGradientColor="lineGradientColor" :visiblePoint="false"> </screen-circle-canvas>
</div>
<script>
  export default {
    data() {
      return {
        lineGradientColor: [
          { percent: 0, color: '#0096FF' },
          { percent: 0.5, color: '#00B4FF' },
          { percent: 1, color: '#00B4FF' }
        ]
      }
    }
  }
</script>
```

:::

### Attributes

|       参数        |          说明          |  类型   | 可选值 |                                                  默认值                                                  |
| :---------------: | :--------------------: | :-----: | :----: | :------------------------------------------------------------------------------------------------------: |
|   circleRadius    |        圆环半径        | Number  |   -    |                                                    60                                                    |
|    pointRadius    |        圆点半径        | Number  |   -    |                                                    6                                                     |
|    pointColor     |        圆点颜色        | String  |   -    |                                                 #FF4949                                                  |
|   visiblePoint    |      是否显示圆点      | Boolean |   -    |                                                   true                                                   |
|    circleWidth    |        圆环宽度        | Number  |   -    |                                                    6                                                     |
|    circleColor    |        圆环颜色        | String  |   -    |                                                   #eee                                                   |
|    percentage     |          占比          | Number  |   -    |                                                    50                                                    |
|     fontColor     |        字体颜色        | String  |   -    |                                                   #000                                                   |
|     fontSize      |        字体大小        | String  |   -    |                                                    30                                                    |
|   progressColor   |      进度圆环颜色      | String  |   -    |                                                   red                                                    |
|   progressWidth   |      进度圆环宽度      | String  |   -    |                                                    6                                                     |
|     startDeg      | 开始角度(暂时不起作用) | Number  |   -    |                                                    0                                                     |
|       step        | 初始动画周期，单位为秒 | Number  |   -    |                                                   0.6                                                    |
|  visibleGradient  |      是否要过渡色      | Boolean |   -    |                                                   true                                                   |
| lineGradientColor |       过渡的颜色       |  Array  |   -    | [ { percent: 0, color: '#FF9933' }, { percent: 0.5, color: '#FF9933' }, { percent: 1, color: '#FF4949' } |

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
