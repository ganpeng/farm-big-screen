<template>
  <div class="trend-chart-inner-container">
    <div class="label-tag">
      <div @click="toggleTrendLabel(index)" :class="['label-item', item.active && 'active']" v-for="(item, index) in trendLabelList" :key="item.name">
        <div :style="`background-color: ${ item.active ? item.color : '#27334F'};`"/>
        {{item.name}}
      </div>
    </div>
    <div class="trend-chart-wrapper">
      <div id="trend-chart"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts';
import constants from '@/util/constants';
export default {
  name: 'TrendChart',
  data() {
    return {
      trendLabelList: constants.trendChartLabelList
    };
  },
  methods: {
    async initCharts() {
      try {
        let myChartId = document.getElementById('trend-chart');
        //高度计算
        this.chartssize(document.querySelector('.trend-chart-wrapper'), myChartId);
        let myChart = echarts.init(myChartId);
        // 为echarts对象加载数据
        let colors = ["#5793f3", "#d14a61", "#675bba", "#c04aab"];
        let option = {
          color: colors,
          tooltip: {
            trigger: "axis"
          },
          grid: {
            top: '10%',
            right: "10%",
            left: '20%',
            bottom: '10%'
          },
          toolbox: {
            feature: {
              dataView: {
                show: false,
                readOnly: false
              },
              restore: {
                show: false
              },
              saveAsImage: {
                show: false
              }
            }
          },
          legend: {
            data: [
              '空气温度',
              '空气湿度',
              '光照度',
              '光照总辐射',
              '降雨量',
              '气压',
              '风速',
              '土壤温度',
              '土壤湿度',
              '捕虫量',
              '温度',
              'PH值'
            ]
          },
          xAxis: [
            {
              type: "category",
              axisTick: {
                alignWithLabel: false
              },
              data: [
                "2016-01",
                "2016-02",
                "2016-03",
                "2016-04",
                "2016-05",
                "2016-06",
                "2016-07",
                "2016-08",
                "2016-09",
                "2016-10",
                "2016-11",
                "2016-12"
              ]
            }
          ],
          yAxis: [
            {
              type: "value",
              name: "空气温度",
              min: 0,
              max: 38,
              position: "left",
              axisLine: {
                lineStyle: {
                  color: constants.colors[0]
                }
              },
              axisLabel: {
                formatter: "{value}"
              }
            },
            {
              type: "value",
              name: "空气湿度",
              min: 0,
              max: 200,
              position: "left",
              offset: 60,
              axisLine: {
                lineStyle: {
                  color: constants.colors[1]
                }
              },
              axisLabel: {
                formatter: "{value}"
              }
            },
            {
              type: "value",
              name: "光照度",
              min: 0,
              max: 200,
              position: "left",
              offset: 120,
              axisLine: {
                lineStyle: {
                  color: constants.colors[2]
                }
              },
              axisLabel: {
                formatter: "{value}"
              }
            },
            {
              type: "value",
              name: "光照总辐射",
              min: 0,
              max: 90,
              position: "left",
              offset: 180,
              axisLine: {
                lineStyle: {
                  color: constants.colors[3]
                }
              },
              axisLabel: {
                formatter: "{value}"
              }
            },
            {
              type: "value",
              name: "光照总辐射",
              min: 0,
              max: 90,
              position: "left",
              offset: 180,
              axisLine: {
                lineStyle: {
                  color: constants.colors[3]
                }
              },
              axisLabel: {
                formatter: "{value}"
              }
            },
            {
              type: "value",
              name: "光照总辐射",
              min: 0,
              max: 90,
              position: "left",
              offset: 180,
              axisLine: {
                lineStyle: {
                  color: constants.colors[3]
                }
              },
              axisLabel: {
                formatter: "{value}"
              }
            },
            {
              type: "value",
              name: "光照总辐射",
              min: 0,
              max: 90,
              position: "left",
              offset: 180,
              axisLine: {
                lineStyle: {
                  color: constants.colors[3]
                }
              },
              axisLabel: {
                formatter: "{value}"
              }
            }
          ],
          series: [
            {
              name: "设备新增数量",
              type: "bar",
              data: [
                10000,
                2000,
                1065,
                3620,
                6530,
                9510,
                2000,
                3002,
                3580,
                5063,
                1520,
                9000
              ]
            },
            {
              name: "产品新增数量",
              type: "bar",
              yAxisIndex: 1,
              data: [10, 50, 100, 32, 56, 87, 41, 25, 46, 96, 30, 150]
            },
            {
              name: "厂商新增数量",
              type: "bar",
              data: [12, 15, 26, 36, 25, 18, 16, 47, 58, 69, 93, 150]
            },
            {
              name: "注册用户新增数量",
              type: "bar",
              yAxisIndex: 3,
              data: [
                30000,
                5000,
                50000,
                13436,
                25555,
                18000,
                56416,
                42227,
                44658,
                69002,
                90013,
                15330
              ]
            }
          ]
        };
        // myChart.clear();
        myChart.setOption(option, true);
        //建议加上以下这一行代码，不加的效果图如下（当浏览器窗口缩小的时候）。超过了div的界限（红色边框）
        window.addEventListener('resize', function () {
          myChart.resize();
        });
      } catch (err) {
        console.log(err);
      }
    },
    chartssize(container, charts) {
      function getStyle(el) {
        if (window.getComputedStyle) {
          return window.getComputedStyle(el, null);
        } else {
          return el.currentStyle;
        }
      }
      let wi = getStyle(container, 'width').width;
      let hi = getStyle(container, 'height').height;

      charts.style.width = wi;
      charts.style.height = hi;
    },
    toggleTrendLabel(index) {
      console.log(index);
    }
  }
};
</script>
<style lang="scss" scoped>
.trend-chart-inner-container {
  .label-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    .label-item {
      margin: 5px;
      font-size: 12px;
      display: flex;
      align-items: center;
      color: #27334F;
      cursor: pointer;
      z-index: 2000000000000;
      &.active {
        color: #F0F0F0;
      }
      div {
        width: 12px;
        height: 12px;
        margin-right: 5px;
      }
    }
  }
  .trend-chart-wrapper {
    width: 17.8rem;
    height: 2.8rem;
  }
}
</style>
