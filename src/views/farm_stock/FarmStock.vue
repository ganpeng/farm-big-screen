<template>
  <div class="farm-stock-container">
    <div class="left-side">
      <div class="left-side-top">
        <dv-border-box-13>
          <div class="left-side-top-content field-content">
            <div class="title-one">
              <h5>耕地类型</h5>
              <dv-decoration-2 style="width:100%;height:5px;"/>
            </div>
            <div class="charts-container">
              <div class="charts-header">
                总耕地面积
                <i>1200</i> <span>公顷</span>
              </div>
              <div class="charts-wrapper">
                <dv-active-ring-chart :config="config" style="width:160px;height:160px"/>
              </div>
              <label-tag :config="config"></label-tag>
            </div>
          </div>
        </dv-border-box-13>
      </div>
      <div class="left-side-bottom">
        <dv-border-box-13>
          <div class="left-side-bottom-content field-content">
            <div class="helf-field">
              <div class="title-one">
                <h5>本年度播种面积(公顷)</h5>
                <dv-decoration-2 style="width:100%;height:5px;"/>
                <div class="charts-container">
                  <div class="charts-header">
                    总播种面积
                    <i>1200</i> <span>公顷</span>
                  </div>
                  <div class="charts-wrapper">
                    <rose-chart></rose-chart>
                  </div>
                </div>
              </div>
            </div>
            <div class="helf-field">
              <div class="title-one">
                <h5>本年度产量(万吨)</h5>
                <dv-decoration-2 style="width:100%;height:5px;"/>
                <div class="charts-container">
                  <dv-capsule-chart :config="config3" style="width:100%;height:200px"/>
                </div>
              </div>
            </div>
          </div>
        </dv-border-box-13>
      </div>
    </div>
    <div class="middle-content">
      <div class="middle-top">
        <dv-border-box-13>
          <div class="middle-top-content field-content">
            <farm-map></farm-map>
          </div>
        </dv-border-box-13>
      </div>
      <div class="middle-bottom">
        <dv-border-box-13>
          <div class="middle-bottom-content field-content">
            <farm-alert></farm-alert>
          </div>
        </dv-border-box-13>
      </div>
    </div>
    <div class="right-side">
      <div class="right-side-top">
        <dv-border-box-13>
          <div class="right-side-top-content field-content">
            <div class="title-one">
              <h5>物环统计</h5>
              <dv-decoration-2 style="width:100%;height:5px;"/>
            </div>
            <div class="charts-container">
              <div class="charts-header">
                物环总数
                <i>120</i>个
              </div>
              <div class="charts-wrapper">
                <dv-active-ring-chart :config="config2" style="width:160px;height:160px"/>
              </div>
              <label-tag :config="config2"></label-tag>
            </div>
          </div>
        </dv-border-box-13>
      </div>
      <div class="right-side-bottom">
        <dv-border-box-13>
          <div class="right-side-bottom-content field-content">
            <div class="title-one">
              <h5>经营情况统计</h5>
              <dv-decoration-2 style="width:100%;height:5px;"/>
            </div>
          </div>
        </dv-border-box-13>
      </div>
    </div>
  </div>
</template>
<script>
import LabelTag from "@/components/LabelTag";
import FarmMap from "@/components/FarmMap";
import constants from "@/util/constants";
import RoseChart from "./components/RoseChart";
import FarmAlert from "./components/FarmAlert";
export default {
  name: "FarmStock",
  components: { LabelTag, RoseChart, FarmAlert, FarmMap },
  data() {
    return {
      config: Object.assign({}, this.$util.ringChartDefaultConfig, {
        data: constants.ringChartData1
      }),
      config2: Object.assign({}, this.$util.ringChartDefaultConfig, {
        data: constants.ringChartData2
      }),
      config3: {
        data: constants.barChartData1,
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        unit: "万吨",
        showValue: true
      }
    };
  },
  created() {
    console.log(this.$util);
  }
};
</script>
<style lang="scss" scoped>
.farm-stock-container {
  display: flex;
  flex: 1;
  .left-side {
    display: flex;
    flex-direction: column;
    flex: 1;
    .left-side-top {
      flex: 1;
      margin-bottom: 10px;
    }
    .left-side-bottom {
      flex: 2;
      .left-side-bottom-content {
        display: flex;
        flex-direction: column;
        .helf-field {
          flex: 1;
          &:nth-of-type(1) {
            margin-bottom: 32px;
          }
        }
      }
    }
  }
  .middle-content {
    display: flex;
    flex-direction: column;
    flex: 4;
    margin: 0 10px;
    .middle-top {
      flex: 2;
      margin-bottom: 10px;
      .middle-top-content {
        height: 100%;
        overflow: hidden;
      }
    }
    .middle-bottom {
      flex: 1;
      .middle-bottom-content {
        padding: 22px;
      }
    }
  }
  .right-side {
    display: flex;
    flex-direction: column;
    flex: 1;
    .right-side-top {
      flex: 1;
      margin-bottom: 10px;
    }
    .right-side-bottom {
      flex: 2;
    }
  }
  .field-content {
    padding: 20px 18px 18px 18px;
  }
}

// 图表
.charts-container {
  .charts-header {
    font-size: 14px;
    line-height: 30px;
    margin: 8px 0;
    text-align: center;
    color: #417FC8;
    i {
      color: #2EABFF;
      font-size: 22px;
      margin-left: 10px;
    }
    span {
      color: #2EABFF;
    }
  }
  .charts-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
