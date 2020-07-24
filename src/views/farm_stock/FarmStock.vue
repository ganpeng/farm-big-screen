<template>
  <div class="farm-stock-container">
    <div class="left-side">
      <div class="left-side-top border-icon1">
        <div class="left-side-top-content field-content">
          <div class="title-one">
            <h5>
              <svg-icon class="title-icon" icon-class="title_icon"></svg-icon>
              耕地类型
            </h5>
            <div class="title-border">
              <div class="left-gap gap"></div>
              <div class="right-gap gap"></div>
            </div>
          </div>
          <div class="charts-container">
            <div class="charts-header">
              总耕地面积
              <i>1200</i> <span>公顷</span>
            </div>
            <div class="charts-wrapper">
              <dv-active-ring-chart class="ring-chart" :config="config"/>
            </div>
            <label-tag :config="config"></label-tag>
          </div>
        </div>
      </div>
      <div class="left-side-bottom border-icon2">
        <div class="left-side-bottom-content field-content">
          <div class="title-one">
            <h5>
              <svg-icon class="title-icon" icon-class="title_icon"></svg-icon>
              经营情况统计
            </h5>
            <div class="title-border">
              <div class="left-gap gap"></div>
              <div class="right-gap gap"></div>
            </div>
          </div>
          <div class="helf-field-container">
            <div class="helf-field">
              <div class="title-one">
                <h5><i class="point"></i> 本年度播种面积(公顷)</h5>
              </div>
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
            <div class="helf-field">
              <div class="title-one">
                <h5><i class="point"></i> 本年度产量(万吨)</h5>
              </div>
              <div class="charts-container">
                <dv-capsule-chart :config="config3" style="width:100%;height:2rem"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="middle-content">
      <div class="middle-top border-icon4">
        <div class="middle-top-content farm-map-container field-content">
          <farm-map></farm-map>
          <div class="map-title">
            农场分布
          </div>
          <div class="farm-count">
            <div class="farm-machine-icon">
              <svg-icon icon-class="farm_machine_icon"></svg-icon>
            </div>
            <div class="farm-count-info">
              <div class="label">农场</div>
              <div class="value">8<i>个</i></div>
            </div>
          </div>
          <div class="people-count">
            <div class="farm-member-icon">
              <svg-icon icon-class="farm_member_icon"></svg-icon>
            </div>
            <div class="people-count-info">
              <div class="label">从业人员</div>
              <div class="value">876<i>个</i></div>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-bottom border-icon3">
        <div class="middle-bottom-content field-content">
          <farm-alert></farm-alert>
        </div>
      </div>
    </div>
    <div class="right-side">
      <div class="right-side-top border-icon1">
        <div class="right-side-top-content field-content">
          <div class="title-one">
            <h5>
              <svg-icon class="title-icon" icon-class="title_icon"></svg-icon>
              物环统计
            </h5>
            <div class="title-border">
              <div class="left-gap gap"></div>
              <div class="right-gap gap"></div>
            </div>
          </div>
          <div class="charts-container">
            <div class="charts-header">
              物环总数
              <i>120</i>个
            </div>
            <div class="charts-wrapper">
              <dv-active-ring-chart class="ring-chart" :config="config2"/>
            </div>
            <label-tag :config="config2"></label-tag>
          </div>
        </div>
      </div>
      <div class="right-side-bottom border-icon2">
        <div class="right-side-bottom-content field-content">
          <div class="title-one">
            <h5>
              <svg-icon class="title-icon" icon-class="title_icon"></svg-icon>
              经营情况统计
            </h5>
            <div class="title-border">
              <div class="left-gap gap"></div>
              <div class="right-gap gap"></div>
            </div>
          </div>
          <div class="content-item-container">
            <div class="field-content-item">
              <div class="title-one">
                <h5><i class="point"></i> 农业现代化</h5>
              </div>
              <div class="info-row">
                <div class="info-item">
                  <div class="title">农机具数量</div>
                  <div class="value">
                    1200<i>辆/台</i>
                  </div>
                </div>
                <div class="info-item">
                  <div class="title">农民累积培训</div>
                  <div class="value">
                    1200<i>天</i>
                  </div>
                </div>
              </div>
              <div class="info-row">
                <div class="info-item">
                  <div class="title">证书总量/从业人员</div>
                  <div class="value">
                    2<i>个</i>
                  </div>
                </div>
                <div class="info-item"></div>
              </div>
            </div>
            <div class="field-content-item">
              <div class="title-one">
                <h5><i class="point"></i> 政府扶持</h5>
              </div>
              <div class="info-row">
                <div class="info-item">
                  <div class="title">政府项目累计</div>
                  <div class="value">
                    89<i>个</i>
                  </div>
                </div>
                <div class="info-item">
                  <div class="title">累计金额</div>
                  <div class="value">
                    1200<i>万元</i>
                  </div>
                </div>
              </div>
              <div class="info-row">
                <div class="info-item">
                  <div class="title">农业补贴累计</div>
                  <div class="value">
                    101<i>次</i>
                  </div>
                </div>
                <div class="info-item">
                  <div class="title">累计金额</div>
                  <div class="value">
                    101<i>万元</i>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-content-item">
              <div class="title-one">
                <h5><i class="point"></i> 农业社会化服务</h5>
              </div>
              <div class="info-row">
                <div class="info-item">
                  <div class="title">累计服务企业</div>
                  <div class="value">
                    89<i>次</i>
                  </div>
                </div>
                <div class="info-item">
                  <div class="title">累计服务农户</div>
                  <div class="value">
                    1200<i>次</i>
                  </div>
                </div>
              </div>
              <div class="info-row">
                <div class="info-item">
                  <div class="title">累计服务营收</div>
                  <div class="value">
                    101<i>万元</i>
                  </div>
                </div>
                <div class="info-item">
                </div>
              </div>
            </div>
          </div>
        </div>
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
  padding: 14px 20px 20px 20px;
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
        .helf-field-container {
          display: flex;
          flex-direction: column;
          flex: 1;
          .helf-field {
            display: flex;
            flex-direction: column;
            flex: 1;
            margin-top: 22px;
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
      height: 70%;
      margin-bottom: 10px;
      .middle-top-content {
        position: relative;
        height: 100%;
        overflow: hidden;
        &.farm-map-container {
          padding: 4px;
        }
        .map-title {
          position: absolute;
          top: 20px;
          left: 20px;
          width: 130px;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          font-weight: 500;
          color: #70CAEE;
          text-align: center;
          background: url('../../assets/image/tab_bg_icon.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        .farm-count {
          position: absolute;
          top: 20px;
          right: 190px;
          width: 150px;
          height: 60px;
          display: flex;
          align-items: center;
          background: url('../../assets/image/farm_map_right_icon1.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .farm-machine-icon {
            width: 50%;
            text-align: center;
            .svg-icon {
              width: 24px;
              height: 20px;
            }
          }
          .farm-count-info {
            width: 50%;
            .label {
              font-size: 12px;
              color: #417FC8;
            }
            .value {
              font-size: 30px;
              font-weight: 500;
              color: #68E0E3;
              i {
                font-size: 14px;
              }
            }
          }
        }
        .people-count {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 150px;
          height: 60px;
          display: flex;
          align-items: center;
          background: url('../../assets/image/farm_map_right_icon2.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .farm-member-icon {
            width: 50%;
            text-align: center;
            .svg-icon {
              width: 50%;
              text-align: center;
              .svg-icon {
                width: 24px;
                height: 20px;
              }
            }
          }
          .people-count-info {
            width: 50%;
            .label {
              font-size: 12px;
              color: #417FC8;
            }
            .value {
              font-size: 30px;
              font-weight: 500;
              color: #ECC94C;
              i {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
    .middle-bottom {
      height: 30%;
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
      .content-item-container {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        .field-content-item {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          flex: 1;
          margin-top: 12px;
          .info-row {
            display: flex;
            margin-top: 6px;
            padding-left: 15px;
            .info-item {
              flex: 1;
              .title {
                font-size: 14px;
                color: #417FC8;
              }
              .value {
                font-size: 30px;
                font-weight: bold;
                color: #2EABFF;
                i {
                  font-size:14px;
                  color: #2EABFF;
                }
              }
            }
            .info-item + .info-item {
              margin-left: 10px;
            }
          }
        }
      }
    }
  }
  .field-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px 18px 18px 18px;
  }

}

// 图表
.charts-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
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
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    .ring-chart {
      width: 100%;
      height: calc(100% - 10px);
    }
  }
}
</style>
