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
              <dv-charts :option="option"/>
            </div>
            <div class="data-chart-item border-icon6">
              <div class="title">
                <span>从业人员</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <dv-charts :option="option"/>
            </div>
            <div class="data-chart-item border-icon6">
              <div class="title">
                <span>农机具</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <dv-charts :option="option"/>
            </div>
          </div>
          <div class="data-charts">
            <div class="data-chart-item border-icon6">
              <div class="title">
                <span>种植人员</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <dv-charts :option="option"/>
            </div>
            <div class="data-chart-item border-icon6">
              <div class="title">
                <span>投入品</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <dv-charts :option="option"/>
            </div>
            <div class="data-chart-item border-icon6">
              <div class="title">
                <span>经营数据</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <dv-charts :option="option"/>
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
import FarmAsideNav from "./components/FarmAsideNav";
import SensorData from "./components/SensorData";
export default {
  name: "FarmStockData",
  components: { FarmAsideNav, SensorData },
  data() {
    return {
      activeIndex: 0,
      option: {
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
          data: ["2014", "2015", "2016", "2017", "2018", "2019", "2020"]
        },
        yAxis: {
          data: "value",
          axisLabel: {
            style: {
              fill: '#9FA8B8',
              fontSize: '12px'
            }
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "bar",
            stack: "a"
          },
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "bar",
            stack: "a"
          },
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "bar"
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
