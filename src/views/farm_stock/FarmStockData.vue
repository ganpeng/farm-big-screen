<template>
  <div class="farm-stock-data-container container">
    <farm-aside-nav></farm-aside-nav>
    <div class="content">
      <div class="title-wrapper">
        <div class="tab-list">
          <div @click="changeTab(0)" :class="['tab-item', activeIndex === 0 && 'active']">农场数据</div>
          <div @click="changeTab(1)" :class="['tab-item', activeIndex === 1 && 'active']">设备数据</div>
        </div>
        <div class="farm-title">聚成现代农业发展专业合作社</div>
      </div>
      <div v-if="activeIndex === 0" class="tab-content">
        <div class="data-chart-container">
          <div class="data-charts">
            <div class="data-chart-item border-icon6">
              <div class="title">
                <span>地块数据</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <div class="label-tag-wrapper">
                <label-tag :labelList="labelList1"></label-tag>
              </div>
              <div class="charts-wrapper">
                <dv-charts :option="option"/>
              </div>
            </div>
            <div class="data-chart-item border-icon6">
              <div class="title">
                <span>从业人员</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <div class="label-tag-wrapper">
                <label-tag :labelList="labelList2"></label-tag>
              </div>
              <div class="charts-wrapper">
                <dv-charts :option="option"/>
              </div>
            </div>
            <div class="data-chart-item border-icon6">
              <div class="title">
                <span>农机具</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <div class="label-tag-wrapper">
                <label-tag :labelList="labelList3"></label-tag>
              </div>
              <div class="charts-wrapper">
                <dv-charts :option="option"/>
              </div>
            </div>
          </div>
          <div class="data-charts">
            <div class="data-chart-item border-icon6">
              <div class="title">
                <span>种植数据</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <div class="label-tag-wrapper">
                <label-tag :labelList="labelList4"></label-tag>
              </div>
              <div class="charts-wrapper">
                <dv-charts :option="option"/>
              </div>
            </div>
            <div class="data-chart-item border-icon6">
              <div class="title">
                <span>投入品</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <div class="label-tag-wrapper">
                <label-tag :labelList="labelList5"></label-tag>
              </div>
              <div class="charts-wrapper">
                <dv-charts :option="option"/>
              </div>
            </div>
            <div class="data-chart-item border-icon6">
              <div class="title">
                <span>经营数据</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <div class="label-tag-wrapper">
                <label-tag :labelList="labelList6"></label-tag>
              </div>
              <div class="charts-wrapper">
                <dv-charts :option="option"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeIndex === 1" class="tab-content">
        <div class="title-one">
          <h5>实时数据</h5>
        </div>
        <sensor-data></sensor-data>
      </div>
    </div>
  </div>
</template>
<script>
import LabelTag from '@/components/LabelTag';
import FarmAsideNav from "./components/FarmAsideNav";
import SensorData from "./components/SensorData";
import constants from '@/util/constants';
export default {
  name: "FarmStockData",
  components: { FarmAsideNav, SensorData, LabelTag},
  data() {
    return {
      activeIndex: 0,
      labelList1: constants.labelList1,
      labelList2: constants.labelList2,
      labelList3: constants.labelList3,
      labelList4: constants.labelList4,
      labelList5: constants.labelList5,
      labelList6: constants.labelList6,
      option: {
        grid: {
          top: '2%',
          bottom: '10%'
        },
        xAxis: {
          axisLabel: {
            style: {
              fill: '#9FA8B8',
              fontSize: '12px'
            }
          },
          axisLine: {
            style: {
              stroke: '#3E495E',
              lineWidth: 2
            }
          },
          data: ["2019", "2020"]
        },
        yAxis: {
          data: "value",
          max: '1%',
          axisLabel: {
            style: {
              fill: '#9FA8B8',
              fontSize: '12px'
            }
          },
          splitLine: {
            style: {
              stroke: '#3D485D'
            }
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            data: [1200, 2230],
            type: "bar",
            stack: "b",
            barStyle: {
              fill: '#E2CA7F'
            }
          },
          {
            data: [1200, 2230],
            type: "bar",
            stack: "b",
            barStyle: {
              fill: '#98BD72'
            }
          },
          {
            data: [1200, 2230],
            type: "bar",
            stack: "b",
            barStyle: {
              fill: '#23A6F5'
            }
          },
          {
            data: [1200, 2230],
            type: "bar",
            stack: "a",
            barStyle: {
              fill: '#71CACF'
            }
          },
          {
            data: [1200, 2230],
            type: "bar",
            stack: "a",
            barStyle: {
              fill: '#7C82FB'
            }
          },
          {
            data: [1200, 2230],
            type: "bar",
            barWidth: '10%',
            barStyle: {
              fill: '#297CEB'
            }
          }
        ]
      }
    };
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.farm-stock-data-container {
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8.1632%;
    .tab-list {
      display: flex;
      .tab-item {
        width: 110px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #417fc8;
        background: url('../../assets/image/tab_bg_icon.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        &.active {
          color: #fff;
        }
      }
      .tab-item + .tab-item {
        margin-left: 10px;
      }
    }
  }
  .tab-content {
    height: 90.8367%;
    .data-chart-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      .data-charts {
        display: flex;
        flex: 1;
        .data-chart-item {
          position: relative;
          flex: 1;
          height: 100%;
          background-color: #0b142b;
          .title {
            position: absolute;
            top: -9px;
            left: 0;
            width: 110px;
            height: 42px;
            .svg-icon {
              width: 110px;
              height: 42px;
            }
            span {
              position: absolute;
              top: 40%;
              left: 50%;
              transform: translate(-50%, -50%);
              width: 100%;
              text-align: center;
              color: #70caee;
            }
          }
          .label-tag-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 28%;
          }
          .charts-wrapper {
            height: 62%;
          }
        }
        .data-chart-item + .data-chart-item {
          margin-left: 20px;
        }
      }
      .data-charts:nth-of-type(1) {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
