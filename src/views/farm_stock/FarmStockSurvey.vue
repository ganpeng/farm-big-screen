<template>
  <div class="farm-stock-survey-container container">
    <farm-aside-nav></farm-aside-nav>
    <div class="content">
      <div class="farm-container">
        <div class="farm-tab-content">
          <div v-if="activeIndex === 0" class="farm-tab-content-item">
            <div class="sensor-data-wrapper">
              <sensor-data :list="sensorDataList"></sensor-data>
            </div>
            <div :style="farmContainerBgStyle" class="farm-tab-content-item-container">
              <div @click="displayDescDialog" class="farm-desc-btn border-icon9">农场简介</div>
              <farm-desc-dialog ref="farmDescDialog" :farm="farm"></farm-desc-dialog>
              <div class="masker"></div>
            </div>
          </div>
          <div v-else class="farm-tab-content-item">
            <div class="title-wrapper">
              <div class="farm-title">{{farm.name}}</div>
            </div>
            <div :style="contentBgStyle" class="farm-tab-content-item-container2">
              <div @click="displayCameraVideoDialog(item, index)"
                :style="item.style" v-for="(item, index) in cameraList"
                :key="index"
                class="camera-item">
              </div>
              <div v-if="form === '粮食农田'" class="camera2-item"></div>
              <div @click="showTrendChartDialog" v-if="form === '粮食农田'" class="camera3-item"></div>
              <div v-if="trendChartDialogVisible" class="trend-chart-dialog border-icon19">
                <trend-chart></trend-chart>
                <span @click="hideTrendChartDialog" class="close-btn">
                  <svg-icon icon-class="video_dialog_close_btn"></svg-icon>
                </span>
              </div>
              <div class="masker"></div>
            </div>
          </div>
        </div>
        <div class="farm-tab-bar">
          <div
            @click="changeFarmTabBar(0)"
            :key="0"
            :class="['farm-tab-bar-item', activeIndex === 0 && 'active']">
            <span class="tab-bar-icon">
              <svg-icon v-if="activeIndex === 0" class="title-icon" icon-class="farm_up_arrow_icon_active"></svg-icon>
              <svg-icon v-else class="title-icon" icon-class="farm_up_arrow_icon"></svg-icon>
            </span>
            <span class="tab-bar-title">
              首页
            </span>
          </div>
          <div
            @click="changeFarmTabBar(index + 1)"
            v-for="(item, index) in landList" :key="index + 1"
            :class="['farm-tab-bar-item', activeIndex === (index + 1) && 'active']">
            <span class="tab-bar-icon">
              <svg-icon v-if="activeIndex === (index + 1)" class="title-icon" icon-class="farm_up_arrow_icon_active"></svg-icon>
              <svg-icon v-else class="title-icon" icon-class="farm_up_arrow_icon"></svg-icon>
            </span>
            <span class="tab-bar-title">
              {{item.name}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <video-player-dialog ref="videoPlayerDialog"></video-player-dialog>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import _ from 'lodash';
import FarmAsideNav from './components/FarmAsideNav';
import SensorData from './components/SensorData';
import FarmDescDialog from './components/FarmDescDialog';
import TrendChart from './components/TrendChart';
import VideoPlayerDialog from '@/components/VideoPlayerDialog';
import constants from '@/util/constants';
export default {
  name: 'FarmStockSurvey',
  components: {FarmAsideNav, SensorData, FarmDescDialog, VideoPlayerDialog, TrendChart},
  data() {
    return {
      activeIndex: 0,
      trendChartDialogVisible: false,
      sensorDataList: [],
      landList: [],
      cameraList: []
    };
  },
  computed: {
    ...mapGetters({
      farm: 'farm/currentFarm'
    }),
    contentBgStyle() {
      if (this.activeIndex === 0) {
        return '';
      } else {
        let form = _.get(this.landList, `${this.activeIndex - 1}.form`);
        let {bgImage, bgImages} = _.get(constants.cameraData, `${form}`);
        if (bgImages) {
          let bgImage = _.get(_.shuffle(bgImages), '0');
          return `background-image:url(${bgImage})`;
        } else {
          return `background-image:url(${bgImage})`;
        }
      }
    },
    form() {
      return _.get(this.landList, `${this.activeIndex - 1}.form`);
    },
    farmContainerBgStyle() {
      return `background-image:url(${this.farm.farmIndexUrl})`;
    }
  },
  async created() {
    try {
      let {id} = this.$route.params;
      await this.getFarmById(id);
      let res2 = await this.$service.getLandList({farmId: id, pageSize: 10000});
      if (res2 && res2.code === 0) {
        this.landList = res2.data.list;
      }
      await this.getTrendData();
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    ...mapActions({
      getFarmById: 'farm/getFarmById'
    }),
    async getTrendData() {
      try {
        let { id } = this.$route.params;
        let res = await this.$service.getSensorListByFarmId(id);
        if (res && res.code === 0 && res.data.length > 0) {
          let deviceName = _.get(res.data, `0.deviceName`);
          if (deviceName) {
            let res2 = await this.$service.getSensorLastData(deviceName);
            if (res2 && res2.code === 0) {
              console.log(res2.data);
            }
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    async changeFarmTabBar(index) {
      try {
        this.activeIndex = index;
        if (this.activeIndex !== 0) {
          let {id} = this.$route.params;
          let landCode = _.get(this.landList, `${this.activeIndex - 1}.code`);
          let res = await this.$service.getCameraListByFarmId({farmId: id, landCode});
          if (res && res.code === 0) {
            let cameraList = this.getCameraList(res.data.list);
            this.cameraList = cameraList;
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    getCameraList(cameras) {
      let form = _.get(this.landList, `${this.activeIndex - 1}.form`);
      let count = cameras.length;
      let {position: {left, top}} = _.get(constants.cameraData, `${form}`);
      let tops = constants.getRandNumForRangen(top.min, top.max, count);
      let lefts = constants.getRandNumForRangen(left.min, left.max, count);
      let cameraList = []
      for (let i = 0; i < count; i++) {
        let style = `top: ${tops[i]}%;left: ${lefts[i]}%;`;
        cameraList.push({
          style,
          camera: cameras[i]
        });
      }
      return cameraList;
    },
    displayCameraVideoDialog(item) {
      let playUrl = _.get(item, 'camera.playUrl');
      if (playUrl) {
        this.$refs.videoPlayerDialog.show(playUrl);
      }
    },
    displayDescDialog() {
      this.$refs.farmDescDialog.show();
    },
    showTrendChartDialog() {
      this.trendChartDialogVisible = true;
    },
    hideTrendChartDialog() {
      this.trendChartDialogVisible = false;
    }
  }
}
</script>
<style lang="scss" scoped>
.farm-stock-survey-container {
  &.container {
    .content {
      padding: 10px 0 0 0;
      .farm-container {
        position: relative;
        flex: 1;
        .farm-tab-content {
          height: 100%;
          .farm-tab-content-item {
            position: relative;
            height: 100%;
            .sensor-data-wrapper {
              padding: 0 20px;
            }
            .farm-desc-btn {
              position: absolute;
              top: 0.2rem;
              right: 0.2rem;
              width: 1.3rem;
              height: 0.5rem;
              line-height: 0.5rem;
              font-size: 0.16rem;
              font-weight: 500;
              color: #70CAEE;
              text-align: center;
              cursor: pointer;
            }
            .farm-tab-content-item-container {
              position: relative;
              margin-top: 10px;
              height: calc(100% - 70px);
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center center;
              .masker {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(180deg,rgba(0,0,0,0.03) 0%,rgba(0,0,0,0.33) 100%);
              }
            }
            .farm-tab-content-item-container2 {
              position: relative;
              margin-top: 10px;
              height: calc(100% - 50px);
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-position: center center;
              .masker {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(180deg,rgba(0,0,0,0.03) 0%,rgba(0,0,0,0.33) 100%);
              }
              .camera-item {
                position: absolute;
                width: 95px;
                height: 70px;
                cursor: pointer;
                background-image: url('../../assets/image/camera1.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: center center;
              }
              .camera2-item {
                position: absolute;
                width: 0.8rem;
                height: 0.82rem;
                top: 38%;
                left: 40%;
                cursor: pointer;
                background-image: url('../../assets/image/camera2.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: center center;
                .title {
                  position: absolute;
                  top: -0.14rem;
                  width: 0.9rem;
                  height: 0.3rem;
                  line-height: 0.3rem;
                  color: #f0f0f0;
                  font-size: 0.14rem;
                  text-align: center;
                }
              }
              .camera3-item {
                position: absolute;
                width: 2rem;
                height: 3rem;
                bottom: 10%;
                right: 10%;
                cursor: pointer;
                background-image: url('../../assets/image/sensor_icon.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: center center;
              }
              .trend-chart-dialog {
                position: absolute;
                top: 40%;
                left: 50%;
                transform: translate(-50%, -50%);
                .close-btn {
                  position: absolute;
                  top: -0.4rem;
                  right: 0;
                  cursor: pointer;
                  .svg-icon {
                    width: 0.3rem;
                    height: 0.3rem;
                  }
                }
              }
            }
          }
        }
        .farm-tab-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: absolute;
          bottom: 7.608%;
          left: 50%;
          transform: translateX(-50%);
          width: 41.7582%;
          .farm-tab-bar-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;
            .tab-bar-icon {
              margin-bottom: 0.1rem;
              .svg-icon {
                width: 0.4rem;
                height: 0.3rem;
              }
            }
            .tab-bar-title {
              font-size: 0.14rem;
              font-weight: 500;
              color: #F0F0F0;
            }
            &.active {
              .tab-bar-title {
                color: #68E0E3;
              }
            }
          }
        }
      }
    }
  }
}
</style>
