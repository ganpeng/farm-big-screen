<template>
  <div class="trend-chart-inner-container">
    <div class="label-tag">
      <div @click="toggleTrendLabel(index)" :class="['label-item', item.active && 'active']" v-for="(item, index) in trendLabelList" :key="item.name">
        <div :style="`background-color: ${ item.active ? item.color : '#667799'};`"/>
        {{item.name}}
      </div>
    </div>
    <div class="day-list">
      <div @click="changeDay(index)" v-for="(item, index) in dayList" :key="index" :class="['day-item', item.active && 'active']">
        {{item.label}}
      </div>
    </div>
    <div class="trend-chart-wrapper">
      <div v-show="trendDataList.length === 0" class="empty-container">
        <svg-icon icon-class="empty_icon"></svg-icon>
        <div class="tips">请选择数据指标</div>
      </div>
      <div v-show="trendDataList.length > 0" id="trend-chart"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts';
import _ from 'lodash';
import constants from '@/util/constants';
export default {
  name: 'TrendChart',
  data() {
    return {
      dayList: [
        {
          label: '日',
          value: 1,
          active: true
        },
        {
          label: '7日',
          value: 7,
          active: false
        },
        {
          label: '30日',
          value: 30,
          active: false
        },
        {
          label: '6个月',
          value: 180,
          active: false
        },
        {
          label: '1年',
          value: 365,
          active: false
        }
      ],
      trendLabelList: constants.trendChartLabelList,
      trendDataList: [],
      myChart: null
    };
  },
  async created() {
    try {
      await this.$nextTick();
      await this.getTrendData();
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async getTrendData() {
      try {
        let { id } = this.$route.params;
        let res = await this.$service.getSensorListByFarmId(id);
        if (res && res.code === 0 && res.data.length > 0) {
          let deviceName = _.get(res.data, `0.deviceName`);
          if (deviceName) {
            let activeDay = this.dayList.find((item) => item.active);
            let days = _.get(activeDay, 'value');
            let res2 = await this.$service.getSensor({deviceName: 'EMISi1Fay5oCAGpKwZ8Z', days});
            if (res2 && res2.code === 0) {
              this.trendDataList = res2.data;
              if (this.trendDataList.length > 0) {
                this.initCharts();
              } else {
                if (this.myChart) {
                  this.myChart.clear();
                }
              }
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    async initCharts() {
      try {
        let myChartId = document.getElementById('trend-chart');
        //高度计算
        this.chartssize(document.querySelector('.trend-chart-wrapper'), myChartId);
        let myChart = echarts.init(myChartId);
        this.myChart = myChart;
        // 为echarts对象加载数据
        myChart.clear();
        myChart.setOption(this.getOption(), true);
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
    getOption() {
      let trendDataList = this.trendLabelList.filter((item) => item.active);
      let colors = trendDataList.map((item) => item.color);
      let yAxis = trendDataList.map((item, index) => {
        return {
          type: "value",
          min: item.min || 0,
          position: "left",
          offset: index * 40,
          axisLine: {
            lineStyle: {
              color: item.color
            }
          },
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color: ['#3D485D']
            }
          },
          axisLabel: {
            formatter: "{value}"
          }
        };
      });

      let trendOne = _.get(this.trendDataList, `0.orderDps`) || [];
      let xAxisData = trendOne.map((item) => item.timestamp).map((item) => {
        return this.$util.dateFormat('YY-mm-dd HH:MM:SS', new Date(item))
      });
      let series = trendDataList.map((item, index) => {
        let trend = this.trendDataList.find((trend) => trend.metric === item.metric);
        let orderDps = _.get(trend, 'orderDps') || [];
        let data = orderDps.map((item) => item.value);
        return {
          name: item.name,
          type: "line",
          yAxisIndex: index,
          data
        };
      });

      let gridLeft = `${(trendDataList.length * 2.4)}%`;
      return {
        color: colors,
        tooltip: {
          show: false
        },
        grid: {
          top: '5%',
          right: "2%",
          left: gridLeft,
          bottom: '10%'
        },
        legend: {
          show: false
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: false
            },
            axisLabel: {
              color: '#9FA8B8'
            },
            data: xAxisData
          }
        ],
        yAxis,
        series
      };
    },
    toggleTrendLabel(index) {
      let active = _.get(this.trendLabelList, `${index}.active`);
      let length = this.trendLabelList.filter((item) => item.active).length;
      if (!active && length >= 7) {
        return false;
      }
      this.trendLabelList = this.trendLabelList.map((item, _index) => {
        if (index === _index) {
          item.active = !item.active;
        }
        return item;
      });

      if (this.myChart) {
        this.myChart.clear();
        this.myChart.setOption(this.getOption());
      }
    },
    changeDay(index) {
      this.dayList = this.dayList.map((item, _index) => {
        if (index === _index) {
          item.active = true;
        } else {
          item.active = false;
        }
        return item;
      });
      this.getTrendData();
    }
  }
};
</script>
<style lang="scss" scoped>
.trend-chart-inner-container {
  position: relative;
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
      color: #667799;
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
  .day-list {
    position: absolute;
    top: 12px;
    right: 20px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    overflow: hidden;
    .day-item {
      width: 50px;
      height: 26px;
      line-height: 26px;
      color: #9FA8B8;
      font-size: 12px;
      text-align: center;
      border: 1px solid #3E495E;
      cursor: pointer;
      &.active {
        color: #2EABFF;
        border-color: #2EABFF;
      }
    }
  }
  .trend-chart-wrapper {
    position: relative;
    width: 17.8rem;
    height: 2.8rem;
    .empty-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .svg-icon {
        width: 64px;
        height: 64px;
      }
      .tips {
        font-size: 14px;
        color: #9FA8B8;
        margin-top: 20px;
      }
    }
  }
}
</style>
