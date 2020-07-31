<template>
  <div class="farm-stock-data-container container">
    <farm-aside-nav></farm-aside-nav>
    <div class="content">
      <div class="title-wrapper">
        <div class="tab-list">
          <div @click="changeTab(0)" :class="['tab-item', activeIndex === 0 && 'active']">农场数据</div>
          <div @click="changeTab(1)" :class="['tab-item', activeIndex === 1 && 'active']">设备数据</div>
        </div>
        <div class="farm-title">{{farm.name}}</div>
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
                <dv-charts :option="landOption"/>
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
                <dv-charts :option="memberOption"/>
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
                <dv-charts :option="machineOption"/>
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
                <dv-charts :option="plantOption"/>
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
                <dv-charts :option="inputOption"/>
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
                <dv-charts :option="businessOption"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="activeIndex === 1" class="tab-content device-content">
        <div class="title-one">
          <div class="wrapper">
            <h5>
              <svg-icon class="title-icon" icon-class="title_icon"></svg-icon>实时数据
            </h5>
          </div>
        </div>
        <sensor-data></sensor-data>
        <div class="title-one">
          <div class="wrapper">
            <h5>
              <svg-icon class="title-icon" icon-class="title_icon"></svg-icon>趋势图
            </h5>
          </div>
        </div>
        <div class="trend-chart-container border-icon18">
          <trend-chart ref="trendChart"></trend-chart>
        </div>
        <div class="device-type-chart-wrapper">
          <div class="title-one">
            <div class="wrapper">
              <h5>
                <svg-icon class="title-icon" icon-class="title_icon"></svg-icon>数据统计
              </h5>
            </div>
          </div>
          <div class="device-type-chart-container">
            <div class="data-chart-wrapper border-icon6">
              <div class="title">
                <span>设备种类</span>
                <svg-icon icon-class="chart_title_icon"></svg-icon>
              </div>
              <div class="label-tag-wrapper">
                <label-tag :labelList="labelList7"></label-tag>
              </div>
              <div class="charts-wrapper">
                <dv-charts :option="deviceOption"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import _ from "lodash";
import LabelTag from "@/components/LabelTag";
import FarmAsideNav from "./components/FarmAsideNav";
import SensorData from "./components/SensorData";
import TrendChart from './components/TrendChart';
import constants from "@/util/constants";
export default {
  name: "FarmStockData",
  components: { FarmAsideNav, SensorData, LabelTag, TrendChart },
  data() {
    return {
      activeIndex: 0,
      labelList1: constants.labelList1,
      labelList2: constants.labelList2,
      labelList3: constants.labelList3,
      labelList4: constants.labelList4,
      labelList5: constants.labelList5,
      labelList6: constants.labelList6,
      labelList7: constants.labelList7,
      landOption: {},
      memberOption: {},
      machineOption: {},
      inputOption: {},
      plantOption: {},
      businessOption: {},
      deviceOption: {}
    };
  },
  async created() {
    try {
      let { id } = this.$route.params;
      await this.getFarmById(id);
      let res = await this.$service.getStatisticsAll({ farmId: id });
      let res2 = await this.$service.getStatisticsPlant({ farmId: id });
      let res3 = await this.$service.getDeviceStatistics({farmId: id});
      if (res && res.code === 0) {
        this.landOption = this.getLandOption(
          _.get(res.data, "landStatisticsList")
        );
        this.memberOption = this.getMemberOption(
          _.get(res.data, "memberStatisticsList")
        );
        this.machineOption = this.getMachineOption(
          _.get(res.data, "machineryStatisticsList")
        );
        this.inputOption = this.getInputOption(
          _.get(res.data, "inputStatisticsList")
        );
        this.businessOption = this.getBusinessOption(
          _.get(res.data, "operatingStatisticsList")
        );
      }
      if (res2 && res2.code === 0) {
        let data = res2.data || [];
        this.plantOption = this.getPlantOption(data);
      }
      if (res3 && res3.code === 0) {
        let data = _.get(res3.data, 'deviceStatisticsList') || [];
        console.log(data);
        this.deviceOption = this.getDeviceOption(data);
      }
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    ...mapGetters({
      farm: "farm/currentFarm"
    })
  },
  methods: {
    ...mapActions({
      getFarmById: "farm/getFarmById"
    }),
    async changeTab(index) {
      try {
        this.activeIndex = index;
        if (this.activeIndex === 1) {
          let { id } = this.$route.params;
          let res = await this.$service.getStatisticsAll({ farmId: id });
          if (res && res.code === 0) {
            this.landOption = this.getLandOption(
              _.get(res.data, "landStatisticsList")
            );
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    mixOption(obj) {
      return {
        grid: {
          left: "13%",
          right: "5%",
          top: "2%",
          bottom: "10%"
        },
        xAxis: {
          axisLabel: {
            style: {
              fill: "#9FA8B8",
              fontSize: "12px"
            }
          },
          axisLine: {
            style: {
              stroke: "#3E495E",
              lineWidth: 2
            }
          },
          data: obj.year
        },
        yAxis: {
          data: "value",
          max: "1%",
          min: 0,
          axisLabel: {
            style: {
              fill: "#9FA8B8",
              fontSize: "12px"
            }
          },
          splitLine: {
            style: {
              lineDash: [3, 3],
              stroke: "#3D485D"
            }
          },
          axisLine: {
            show: false
          }
        },
        series: obj.series
      };
    },
    getLandOption(data) {
      let obj = _.groupBy(data, "year");
      let years = Object.keys(obj);
      let yearData = years.map(year => {
        let item = _.get(obj, `${year}.0`);
        return item;
      });
      // 水浇地
      let item1 = {
        data: yearData.map(item => item.irrigationLandArea),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[1]
        }
      };
      // 旱地
      let item2 = {
        data: yearData.map(item => item.dryLandArea),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[2]
        }
      };
      // 水田
      let item3 = {
        data: yearData.map(item => item.paddyFieldArea),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[3]
        }
      };
      // 耕地
      let item4 = {
        data: yearData.map(item => item.homesteadArea),
        type: "bar",
        stack: "a",
        barStyle: {
          fill: constants.colors[4]
        }
      };
      // 宅基地
      let item5 = {
        data: yearData.map(item => item.farmLandArea),
        type: "bar",
        stack: "a",
        barStyle: {
          fill: constants.colors[5]
        }
      };
      let item6 = {
        data: yearData.map(item => item.totalArea),
        type: "bar",
        barWidth: "10%",
        barStyle: {
          fill: constants.colors[0]
        }
      };
      let series = _.concat([], [item1, item2, item3, item4, item5, item6]);
      return this.mixOption({ year: years, series });
    },
    getMemberOption(data) {
      let obj = _.groupBy(data, "year");
      let years = Object.keys(obj);
      let yearData = years.map(year => {
        let item = _.get(obj, `${year}.0`);
        return item;
      });
      // 经营人员
      let item1 = {
        data: yearData.map(item => item.manageMemberNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[1]
        }
      };
      // 种植人员
      let item2 = {
        data: yearData.map(item => item.plantMemberNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[2]
        }
      };
      // 总人数
      let item3 = {
        data: yearData.map(item => item.totalNumber),
        type: "bar",
        barWidth: "10%",
        barStyle: {
          fill: constants.colors[0]
        }
      };
      let series = _.concat([], [item1, item2, item3]);
      return this.mixOption({ year: years, series });
    },
    getMachineOption(data) {
      let obj = _.groupBy(data, "year");
      let years = Object.keys(obj);
      let yearData = years.map(year => {
        let item = _.get(obj, `${year}.0`);
        return item;
      });
      // 动力类型
      // 风力
      let item1 = {
        data: yearData.map(item => item.windMachineryNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[1]
        }
      };
      // 太阳能
      let item2 = {
        data: yearData.map(item => item.solarMachineryNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[2]
        }
      };
      // 汽油
      let item3 = {
        data: yearData.map(item => item.gasolineMachineryNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[3]
        }
      };
      // 柴油
      let item4 = {
        data: yearData.map(item => item.dieselMachineryNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[4]
        }
      };
      // 电力
      let item5 = {
        data: yearData.map(item => item.electricMachineryNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[5]
        }
      };
      // 煤炭
      let item6 = {
        data: yearData.map(item => item.coalMachineryNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[6]
        }
      };
      // 其他
      let item7 = {
        data: yearData.map(item => item.otherPowerMachineryNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[7]
        }
      };
      // 类型
      // 运输
      let item8 = {
        data: yearData.map(item => item.transportMachineryNumber),
        type: "bar",
        stack: "a",
        barStyle: {
          fill: constants.colors[8]
        }
      };
      // 加工
      let item9 = {
        data: yearData.map(item => item.processMachineryNumber),
        type: "bar",
        stack: "a",
        barStyle: {
          fill: constants.colors[9]
        }
      };
      // 种植
      let item10 = {
        data: yearData.map(item => item.plantingMachineryNumber),
        type: "bar",
        stack: "a",
        barStyle: {
          fill: constants.colors[10]
        }
      };
      // 其他
      let item11 = {
        data: yearData.map(item => item.otherUseMachineryNumber),
        type: "bar",
        stack: "a",
        barStyle: {
          fill: constants.colors[11]
        }
      };
      // 总数
      let item12 = {
        data: yearData.map(item => item.totalNumber),
        type: "bar",
        barWidth: "10%",
        barStyle: {
          fill: constants.colors[0]
        }
      };
      let series = _.concat(
        [],
        [
          item1,
          item2,
          item3,
          item4,
          item5,
          item6,
          item7,
          item8,
          item9,
          item10,
          item11,
          item12
        ]
      );
      return this.mixOption({ year: years, series });
    },
    getInputOption(data) {
      let obj = _.groupBy(data, "year");
      let years = Object.keys(obj);
      let yearData = years.map(year => {
        let item = _.get(obj, `${year}.0`);
        return item;
      });
      // 无机肥
      let item1 = {
        data: yearData.map(item => item.inorganicFertilizerAmount),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[1]
        }
      };
      // 有机肥
      let item2 = {
        data: yearData.map(item => item.organicFertilizerAmount),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[2]
        }
      };
      // 农药
      let item3 = {
        data: yearData.map(item => item.pesticideAmount),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[3]
        }
      };
      // 其他
      let item4 = {
        data: yearData.map(item => item.otherAmount),
        type: "bar",
        stack: "a",
        barStyle: {
          fill: constants.colors[4]
        }
      };
      // 总量
      let item5 = {
        data: yearData.map(item => item.totalAmount),
        type: "bar",
        barWidth: "10%",
        barStyle: {
          fill: constants.colors[0]
        }
      };
      let series = _.concat([], [item1, item2, item3, item4, item5]);
      return this.mixOption({ year: years, series });
    },
    getBusinessOption(data) {
      let obj = _.groupBy(data, "year");
      let years = Object.keys(obj);
      let yearData = years.map(year => {
        let item = _.get(obj, `${year}.0`);
        return item;
      });
      // 项目拨款
      let item1 = {
        data: yearData.map(item => item.appropriationAmount),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[1]
        }
      };
      // 补贴金额
      let item2 = {
        data: yearData.map(item => item.subsidyAmount),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[2]
        }
      };
      // 农业社会化服务
      let item3 = {
        data: yearData.map(item => item.revenueAmount),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[3]
        }
      };
      // 资金总额
      let item4 = {
        data: yearData.map(item => item.totalAmount),
        type: "bar",
        barWidth: "10%",
        barStyle: {
          fill: constants.colors[0]
        }
      };
      let series = _.concat([], [item1, item2, item3, item4]);
      return this.mixOption({ year: years, series });
    },
    getPlantOption(data) {
      let obj = _.groupBy(data, "year");
      let years = Object.keys(obj);
      let yearData = years.map(year => {
        let item = _.get(obj, `${year}.0`);
        return item;
      });
      // 水稻
      let item1 = {
        data: yearData.map(item => item.riceYield),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[1]
        }
      };
      // 大豆
      let item2 = {
        data: yearData.map(item => item.soyaYield),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[2]
        }
      };
      // 玉米
      let item3 = {
        data: yearData.map(item => item.cornYield),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[3]
        }
      };
      // 其他粮食
      let item4 = {
        data: yearData.map(item => item.otherGrainYield),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[4]
        }
      };
      // 其他
      let item5 = {
        data: yearData.map(item => item.otherCropYield),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[5]
        }
      };
      let item6 = {
        data: yearData.map(item => item.totalYield),
        type: "bar",
        barWidth: "10%",
        barStyle: {
          fill: constants.colors[0]
        }
      };
      let series = _.concat([], [item1, item2, item3, item4, item5, item6]);
      return this.mixOption({ year: years, series });
    },
    getDeviceOption(data) {
      let obj = _.groupBy(data, "year");
      let years = Object.keys(obj);
      let yearData = years.map(year => {
        let item = _.get(obj, `${year}.0`);
        return item;
      });
      // 枪机摄像头
      let item1 = {
        data: yearData.map(item => item.boxCameraNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[1]
        }
      };
      // 球机摄像头
      let item2 = {
        data: yearData.map(item => item.domeCameraNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[2]
        }
      };
      // 传感器
      let item3 = {
        data: yearData.map(item => item.sensorNumber),
        type: "bar",
        stack: "b",
        barStyle: {
          fill: constants.colors[3]
        }
      };
      // 总共
      let item6 = {
        data: yearData.map(item => item.totalNumber),
        type: "bar",
        barWidth: "10%",
        barStyle: {
          fill: constants.colors[0]
        }
      };
      let series = _.concat([], [item1, item2, item3, item6]);
      return this.mixOption({ year: years, series });
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
        background: url("../../assets/image/tab_bg_icon.png");
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
    &.device-content {
      display: flex;
      flex-direction: column;
      .title-one {
        margin: 10px 0;
      }
      .trend-chart-container {
        width: 100%;
        height: 3.53rem;
      }
      .device-type-chart-wrapper {
        display: flex;
        flex-direction: column;
        flex: 1;
        .title-one {
          margin-bottom: 20px;
        }
        .device-type-chart-container {
          width: 100%;
          flex: 1;
          .data-chart-wrapper {
            display: flex;
            flex-direction: column;
            position: relative;
            width: 33.33%;
            height: 100%;
            padding-bottom: 30px;
            .label-tag-wrapper {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 20%;
            }
            .charts-wrapper {
              width: 100%;
              height: 80%;
            }
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
        }
      }
    }
  }
}
</style>
