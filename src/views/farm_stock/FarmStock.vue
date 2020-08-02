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
              <i>{{landData.totalArea}}</i> <span>公顷</span>
            </div>
            <div class="charts-wrapper">
              <dv-active-ring-chart class="ring-chart" :config="landConfig"/>
            </div>
            <label-tag :labelList="labelList1"></label-tag>
          </div>
        </div>
      </div>
      <div class="left-side-bottom border-icon2">
        <div class="left-side-bottom-content field-content">
          <div class="title-one">
            <h5>
              <svg-icon class="title-icon" icon-class="title_icon"></svg-icon>
              农作物
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
                  <i>{{plantData.totalArea}}</i> <span>公顷</span>
                </div>
                <div class="charts-wrapper">
                  <div class="rose-chart">
                    <dv-charts :option="plantConfig"/>
                  </div>
                </div>
              </div>
            </div>
            <div class="helf-field">
              <div class="title-one">
                <h5><i class="point"></i> 本年度产量(万吨)</h5>
              </div>
              <div class="charts-container">
                <div class="charts-wrapper">
                  <dv-charts class="ring-chart" :option="plantConfig2"/>
                </div>
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
          <div class="map-title border-icon9">
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
          <farm-alert :warningList="warningList"></farm-alert>
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
              <i>{{deviceData.totalNumber}}</i>个
            </div>
            <div class="charts-wrapper">
              <dv-active-ring-chart class="ring-chart" :config="deviceConfig"/>
            </div>
            <label-tag :labelList="labelList2"></label-tag>
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
                    {{operatingData.governmentProjectNumber}}<i>个</i>
                  </div>
                </div>
                <div class="info-item">
                  <div class="title">累计金额</div>
                  <div class="value">
                    {{operatingData.appropriationAmount | toFixed2}}<i>万元</i>
                  </div>
                </div>
              </div>
              <div class="info-row">
                <div class="info-item">
                  <div class="title">农业补贴累计</div>
                  <div class="value">
                    {{operatingData.subsidyProjectNumber}}<i>次</i>
                  </div>
                </div>
                <div class="info-item">
                  <div class="title">累计金额</div>
                  <div class="value">
                    {{operatingData.subsidyAmount | toFixed2}}<i>万元</i>
                  </div>
                </div>
              </div>
            </div>
            <div class="field-content-item">
              <div class="title-one">
                <h5><i class="point"></i> 农业社会化服务</h5>
              </div>
              <!--
              <div class="info-row">
                <div class="info-item">
                  <div class="title">累计服务</div>
                  <div class="value">
                    10<i>次</i>
                  </div>
                </div>
                <div class="info-item">
                  <div class="title">累计服务农户</div>
                  <div class="value">
                    1200<i>次</i>
                  </div>
                </div>
              </div>
              -->
              <div class="info-row">
                <div class="info-item">
                  <div class="title">累计服务营收</div>
                  <div class="value">
                    {{operatingData.revenueAmount | toFixed2}}<i>万元</i>
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
import _ from 'lodash';
import LabelTag from "@/components/LabelTag";
import FarmMap from "@/components/FarmMap";
import constants from "@/util/constants";
import FarmAlert from "./components/FarmAlert";
export default {
  name: "FarmStock",
  components: { LabelTag, FarmAlert, FarmMap },
  data() {
    return {
      labelList1: constants.landLabelList,
      labelList2: constants.deviceLabelList,
      deviceData: {},
      deviceConfig: {},
      landData: {},
      landConfig: {},
      operatingData: {},
      warningList: [],
      plantData: {},
      plantConfig: {},
      plantConfig2: {}
    };
  },
  async created() {
    try {
      let year = new Date().getFullYear();
      let res = await this.$service.getWarningList({pageSize: 10000});
      let res2 = await this.$service.getLandStatistics({farmId: 0, year});
      let res3 = await this.$service.getDeviceStatistics({farmId: 0, year});
      let res4 = await this.$service.getOperatingStatistics({farmId: 0, year});
      let res5 = await this.$service.getStatisticsPlant({farmId: 0, year});
      if (res && res.code === 0) {
        this.warningList = res.data.list;
      }
      if (res2 && res2.code === 0) {
        this.landData = _.get(res2.data, '0');
        this.landConfig = this.getLandConfig(res2.data);
      }
      if (res3 && res3.code === 0) {
        this.deviceData = _.get(res3.data, `deviceStatisticsList.0`);
        this.deviceConfig = this.getDeviceConfig(this.deviceData);
      }
      if (res4 && res4.code === 0) {
        this.operatingData = _.get(res4.data, '0');
      }
      if (res5 && res5.code === 0) {
        this.plantData = _.get(res5.data, '0');
        this.plantConfig = this.getPlantConfig(this.plantData);
        this.plantConfig2 = this.getPlantConfig2(this.plantData);
      }
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    getLandConfig(inputData) {
      let data = [
        {name: '旱田', value: _.get(inputData, `0.dryLandArea`)},
        {name: '水浇地', value: _.get(inputData, `0.irrigationLandArea`)},
        {name: '水田', value: _.get(inputData, `0.paddyFieldArea`)}
      ];
      return Object.assign({}, this.$util.ringChartDefaultConfig, {data});
    },
    getDeviceConfig(inputData) {
      let data = [
        {name: '传感器', value: _.get(inputData, `sensorNumber`)},
        {name: '球机摄像头', value: _.get(inputData, `domeCameraNumber`)},
        {name: '枪机摄像头', value: _.get(inputData, `boxCameraNumber`)}
      ];
      return Object.assign({}, this.$util.ringChartDefaultConfig, {data});
    },
    getPlantConfig(data) {
      return {
        xAxis: {
          min: 0
        },
        series: [
          {
            type: "pie",
            radius: "60%",
            roseSort: false,
            data: [
              { name: "水稻", value: data.riceArea },
              { name: "大豆", value: data.soyaArea },
              { name: "玉米", value: data.cornArea },
              { name: "其他粮食", value: data.otherGrainArea },
              { name: "其他", value: data.otherCropArea }
            ],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              formatter: "{name} {percent}%",
              labelLineEndLength: 10,
              style: {
                fill: "#9FA8B8"
              },
              labelLineStyle: {
                stroke: "#9FA8B8"
              }
            },
            roseType: true
          }
        ],
        color: constants.colors
      };
    },
    getPlantConfig2(data) {
      return {
        color: constants.colors,
        grid: {
          left: 60,
          right: 10,
          top: '5%',
          bottom: '5%'
        },
        xAxis: {
          data: 'value' ,
          min: 0,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          min: 0,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            style: {
              fill: '#9FA8B8',
              fontSize: 12
            }
          },
          splitLine: {
            show: false
          },
          data: ['水稻', '大豆', '玉米', '其他粮食', '其他']
        },
        series: [
          {
            data: [data.riceArea, data.soyaArea, data.cornArea, data.otherGrainArea, data.otherCropArea],
            type: 'bar',
            label: {
              show: true,
              position: 'top',
              offset: [12, 0],
              style: {
                fill: '#fff'
              }
            },
            barWidth: 20,
            independentColor: true,
            backgroundBar: {
              show: true,
              style: {
                fill: '#11233C'
              }
            },
            animationCurve: 'easeOutBack'
          }
        ]
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.farm-stock-container {
  display: flex;
  justify-content: space-between;
  height: calc(100% - 0.8rem);
  padding: 0.14rem 0.2rem 0.2rem 0.2rem;
  .left-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 17.02%;
    .left-side-top {
      height: 32.9896%;
    }
    .left-side-bottom {
      height: 64.9484%;
      overflow-y: scroll;
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
            margin-top: 0.22rem;
          }
        }
      }
    }
  }
  .middle-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 63.8297%;
    .middle-top {
      height: 69.5876%;
      .middle-top-content {
        position: relative;
        height: 100%;
        overflow: hidden;
        &.farm-map-container {
          padding: 4px;
        }
        .map-title {
          position: absolute;
          top: 0.20rem;
          left: 0.20rem;
          width: 1.30rem;
          height: 0.5rem;
          line-height: 0.5rem;
          font-size: 0.16rem;
          font-weight: 500;
          color: #70CAEE;
          text-align: center;
        }
        .farm-count {
          position: absolute;
          top: 0.2rem;
          right: 1.90rem;
          width: 1.5rem;
          height: 0.6rem;
          display: flex;
          align-items: center;
          background: url('../../assets/image/farm_map_right_icon1.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          .farm-machine-icon {
            width: 50%;
            text-align: center;
            .svg-icon {
              width: 0.24rem;
              height: 0.20rem;
            }
          }
          .farm-count-info {
            width: 50%;
            .label {
              font-size: 0.12rem;
              color: #417FC8;
            }
            .value {
              font-size: 0.3rem;
              font-weight: 500;
              color: #68E0E3;
              i {
                font-size: 0.14rem;
              }
            }
          }
        }
        .people-count {
          position: absolute;
          top: 0.2rem;
          right: 0.2rem;
          width: 1.5rem;
          height: 0.6rem;
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
                width: 0.24rem;
                height: 0.2rem;
              }
            }
          }
          .people-count-info {
            width: 50%;
            .label {
              font-size: 0.12rem;
              color: #417FC8;
            }
            .value {
              font-size: 0.3rem;
              font-weight: 500;
              color: #ECC94C;
              i {
                font-size: 0.14rem;
              }
            }
          }
        }
      }
    }
    .middle-bottom {
      height: 28.3505%;
      .middle-bottom-content {
        padding: 22px;
      }
    }
  }
  .right-side {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 17.02%;
    .right-side-top {
      height: 32.9896%;
    }
    .right-side-bottom {
      height: 64.9484%;
      overflow-y: scroll;
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
          margin-top: 0.12rem;
          .info-row {
            display: flex;
            margin-top: 0.06rem;
            padding-left: 0.15rem;
            .info-item {
              flex: 1;
              .title {
                font-size: 0.14rem;
                color: #417FC8;
              }
              .value {
                font-size: 0.3rem;
                font-weight: bold;
                color: #2EABFF;
                i {
                  font-size: 0.14rem;
                  color: #2EABFF;
                }
              }
            }
            .info-item + .info-item {
              margin-left: 0.1rem;
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
    padding: 0.2rem 0.18rem 0.18rem 0.18rem;
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
    font-size: 0.14rem;
    font-size: 0.14rem;
    line-height: 0.30rem;
    margin: 0.08rem 0;
    text-align: center;
    color: #417FC8;
    i {
      color: #2EABFF;
      font-size: 0.22rem;
      margin-left: 0.1rem;
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
      height: calc(100% - 0.1rem);
    }
    .rose-chart {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
