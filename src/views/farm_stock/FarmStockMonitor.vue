<template>
  <div class="farm-stock-monitor container">
    <farm-aside-nav></farm-aside-nav>
    <div class="content">
      <div class="title-wrapper">
        <div class="tab-list">
          <div v-for="(land, index) in landList" 
            :key="index" 
            @click="changeTab(index)"
            :class="['tab-item', activeIndex === index && 'active']">
            {{land.name}}
          </div>
          <!--
          <div @click="changeTab(0)" :class="['tab-item', activeIndex === 0 && 'active']">农田农情</div>
          <div @click="changeTab(1)" :class="['tab-item', activeIndex === 1 && 'active']">育苗大棚</div>
          -->
        </div>
        <div class="farm-title">{{farm.name}}</div>
      </div>
      <div class="tab-content">
        <div class="tab-content-wrapper">
          <div class="left-content border-icon14">
            <div class="left-top-content">
              <div class="title-one">
                <h5>
                  <i class="point"></i> 截图
                </h5>
                <!-- <my-select></my-select> -->
                  <v-select
                    placeholder="请选择"
                    class="my-vue-select"
                    label="title"
                    :options="[{title: 1}, {title: 2}]"
                  />
              </div>
              <div class="left-media-content border-icon11">
                <agile>
                    <div class="slide">
                        <h3>slide 1</h3>
                    </div>
                    <div class="slide">
                        <h3>slide 2</h3>
                    </div>
                    <div class="slide">
                        <h3>slide 3</h3>
                    </div>
                </agile>
              </div>
            </div>
            <div class="left-middle-content">
              <div class="title-one">
                <h5>
                  <i class="point"></i> 月度延时摄影
                </h5>
              </div>
              <div class="left-media-content border-icon11">
                <video-player :options="videoOptions"></video-player>
              </div>
            </div>
            <div class="left-bottom-content">
              <div class="title-one">
                <h5>
                  <i class="point"></i> 摄像头分布
                </h5>
              </div>
              <div class="left-media-content border-icon11">
                <video-player :options="videoOptions"></video-player>
              </div>
            </div>
          </div>
          <div class="right-content border-icon12">
            <div class="title-one">
              <div class="wrapper">
                <h5>
                  <svg-icon class="title-icon" icon-class="title_icon"></svg-icon>
                  实时监控
                </h5>
                <div class="sub-tab-list">
                  <li v-for="(item, index) in cameraList" :key="index" 
                    @click="changeSubTab(index)"
                    :class="['sub-tab-item', 'border-icon15', subActiveIndex === index && 'active']">
                    {{index + 1}}
                  </li>
                  <!--
                  <li @click="changeSubTab(0)"
                    :class="['sub-tab-item', 'border-icon15', subActiveIndex === 0 && 'active']">1</li>
                  <li @click="changeSubTab(1)"
                    :class="['sub-tab-item', 'border-icon15', subActiveIndex === 1 && 'active']">2</li>
                  -->
                </div>
              </div>
              <div class="title-border">
                <div class="left-gap gap"></div>
                <div class="right-gap gap"></div>
              </div>
            </div>
            <div class="camera-list">
              <div v-for="(camera, index) in activeCameraList" :key="index" 
                class="camera-item">
                <div class="title-one small">
                  <h5>
                    <i class="point"></i> {{camera.deviceName}}
                  </h5>
                </div>
                <div class="media-content border-icon13">
                  <video-player :options="videoOptions2(camera)"></video-player>
                </div>
              </div>
              <!-- 
              <div class="camera-item">
                <div class="title-one small">
                  <h5>
                    <i class="point"></i> 农田农情-枪机01
                  </h5>
                </div>
                <div class="media-content border-icon13">
                  <video-player :options="videoOptions2"></video-player>
                </div>
              </div>
              <div class="camera-item">
                <div class="title-one samll">
                  <h5>
                    <i class="point"></i> 农田农情-枪机02
                  </h5>
                </div>
                <div class="media-content border-icon13">
                  <video-player :options="videoOptions2"></video-player>
                </div>
              </div>
              <div class="camera-item">
                <div class="title-one small">
                  <h5>
                    <i class="point"></i> 农田农情-枪机03
                  </h5>
                </div>
                <div class="media-content border-icon13">
                  <video-player :options="videoOptions2"></video-player>
                </div>
              </div>
              <div class="camera-item">
                <div class="title-one small">
                  <h5>
                    <i class="point"></i> 农田农情-枪机04
                  </h5>
                </div>
                <div class="media-content border-icon13">
                  <video-player :options="videoOptions2"></video-player>
                </div>
              </div>
              -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex';
import _ from 'lodash';
import { VueAgile } from 'vue-agile';
import FarmAsideNav from "./components/FarmAsideNav";
import VideoPlayer from '@/components/VideoPlayer';
export default {
  name: "FarmStockMonitor",
  components: { FarmAsideNav, VideoPlayer, agile: VueAgile },
  // components: { FarmAsideNav, VideoPlayer },
  data() {
    return {
      landList: [],
      cameraList: [],
      activeIndex: 0,
      subActiveIndex: 0
    };
  },
  async created() {
    try {
      let {id} = this.$route.params;
      await this.getFarmById(id);
      let res = await this.$service.getLandList({farmId: id, pageSize: 10000});
      if (res && res.code === 0) {
        this.landList = res.data.list;
        this.getCameraListByLandCode();
      }
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    ...mapGetters({
      farm: 'farm/currentFarm'
    }),
    activeCameraList() {
      return this.cameraList[this.subActiveIndex];
    },
    videoOptions() {
      return {
        autoplay: true,
        controls: true,
        liveui: true,
        sources: [
          {
            src: 'http://n.video.tianchimedia.net/live/34020000001320000001.m3u8?auth_key=1895789200-0-0-5e2f86814ea40c3a64f7881ef4ac7c11',
            type: "application/x-mpegURL"
          }
        ]
      };
    },
    videoOptions2() {
      return (camera) => {
        return {
          autoplay: true,
          controls: true,
          liveui: true,
          sources: [
            {
              src: camera.playUrl,
              type: "application/x-mpegURL"
            }
          ]
        };
      }
    }
  },
  methods: {
    ...mapActions({
      getFarmById: 'farm/getFarmById'
    }),
    async getCameraListByLandCode() {
      try {
        let {id} = this.$route.params;
        let landCode = _.get(this.landList, `${this.activeIndex}.code`);
        let res = await this.$service.getCameraListByFarmId({farmId: id, landCode});
        if (res && res.code === 0) {
          this.cameraList = _.chunk(res.data.list, 4);
          console.log(this.cameraList);
        }
      } catch (err) {
        console.log(err);
      }
    },
    changeTab(index) {
      this.activeIndex = index;
      this.getCameraListByLandCode();
    },
    changeSubTab(index) {
      this.subActiveIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.farm-stock-monitor {
  .content {
    width: calc(100% - 1rem);
  }
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8.1632%;
    .tab-list {
      position: relative;
      display: flex;
      z-index: 20;
      .tab-item {
        width: 1.1rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        color: #417fc8;
        font-size: 0.16rem;
        background: url("../../assets/image/tab_bg_icon.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        &.active {
          color: #fff;
        }
      }
      .tab-item + .tab-item {
        margin-left: 0.1rem;
      }
    }
  }
  .tab-content {
    height: 91.8367%;
    .tab-content-wrapper {
      display: flex;
      justify-content: space-between;
      height: 100%;
      .left-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 24.83%;
        height: 100%;
        padding: 0 0.2rem 0.2rem 0.2rem;
        overflow: hidden;
        .left-top-content {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 33.33%;
          overflow: hidden;
        }
        .left-middle-content {
          display: flex;
          flex-direction: column;
          height: 33.33%;
        }
        .left-bottom-content {
          display: flex;
          flex-direction: column;
          height: 33.33%;
        }
        .title-one {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 0.48rem;
        }
        .left-media-content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          width: 100%;
          padding: 0.04rem;
        }
      }
      .right-content {
        display: flex;
        flex-direction: column;
        width: 73.48%;
        height: 100%;
        padding: 0 0.2rem 0.2rem 0.2rem;
        .title-one {
          .wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            h5 {
              height: 0.48rem;
            }
            .sub-tab-list {
              display: flex;
              .sub-tab-item {
                color: #417FC8;
                width: 0.6rem;
                height: 0.32rem;
                line-height: 0.32rem;
                text-align: center;
                cursor: pointer;
                &.active {
                  color: #fff;
                }
              }
              .sub-tab-item + .sub-tab-item {
                margin-left: 0.06rem;
              }
            }
          }
          .title-border {
            margin-top: 0;
          }
        }
        .camera-list {
          display: flex;
          flex-wrap: wrap;
          height: calc(100% - 0.5rem);
          .camera-item {
            display: flex;
            flex-direction: column;
            width: 49.23%;
            height: 50%;
            padding: 0 0.1rem;
            .title-one {
              display: flex;
              align-items: center;
              height: 0.44rem;
            }
            .media-content {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              flex: 1;
              padding: 0.04rem;
            }
          }
          .camera-item:nth-of-type(2n) {
            margin-left: 1.529%;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.my-vue-select {
  &.v-select {
    width: 120px;
    height: 32px;
    .vs__dropdown-toggle {
      height: 32px;
      padding: 0;
      background-color: #182F68;
      border-radius: 2px;
      .vs__selected {
        color: #F0F0F0;
        font-size: 12px;
        height: 32px;
        line-height: 32px;
        margin: 0;
        padding: 0;
        padding-left: 6px;
      }
      input {
        margin: 0;
        padding: 0;
        padding-left: 6px;
        color: #F0F0F0;
        font-size: 12px;
      }
      .vs__actions {
        .vs__clear {
          svg {
            fill: #F0F0F0;
            font-weight: lighter;
          }
        }
        .vs__open-indicator {
            fill: #F0F0F0;
            font-weight: lighter;
        }
      }
    }
    ul {
      min-width: 120px;
      top: calc(100%  + 4px);
      background-color: #182F68;
      li {
        width: 120px;
        color: #f0f0f0;
      }
    }
  }
}
</style>