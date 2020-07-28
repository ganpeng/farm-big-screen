<template>
  <div class="farm-stock-monitor container">
    <farm-aside-nav></farm-aside-nav>
    <div class="content">
      <div class="title-wrapper">
        <div class="tab-list">
          <div @click="changeTab(0)" :class="['tab-item', activeIndex === 0 && 'active']">农田农情</div>
          <div @click="changeTab(1)" :class="['tab-item', activeIndex === 1 && 'active']">育苗大棚</div>
        </div>
        <div class="farm-title">聚成现代农业发展专业合作社</div>
      </div>
      <div class="tab-content">
        <div class="tab-content-wrapper">
          <div class="left-content border-icon14">
            <div class="left-top-content">
              <div class="title-one">
                <h5>
                  <i class="point"></i> 截图
                </h5>
              </div>
              <div class="left-media-content border-icon11"></div>
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
                  <li @click="changeSubTab(0)"
                    :class="['sub-tab-item', 'border-icon15', subActiveIndex === 0 && 'active']">1</li>
                  <li @click="changeSubTab(1)"
                    :class="['sub-tab-item', 'border-icon15', subActiveIndex === 1 && 'active']">2</li>
                </div>
              </div>
              <div class="title-border">
                <div class="left-gap gap"></div>
                <div class="right-gap gap"></div>
              </div>
            </div>
            <div class="camera-list">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FarmAsideNav from "./components/FarmAsideNav";
import VideoPlayer from '@/components/VideoPlayer';
export default {
  name: "FarmStockMonitor",
  components: { FarmAsideNav, VideoPlayer },
  data() {
    return {
      activeIndex: 0,
      subActiveIndex: 0
    };
  },
  computed: {
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
    }
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
    },
    changeSubTab(index) {
      this.subActiveIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.farm-stock-monitor {
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
        padding: 0 20px 20px 20px;
        .left-top-content {
          display: flex;
          flex-direction: column;
          height: 33.33%;
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
          height: 48px;
        }
        .left-media-content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex: 1;
          width: 100%;
          padding: 4px;
        }
      }
      .right-content {
        display: flex;
        flex-direction: column;
        width: 73.48%;
        height: 100%;
        padding: 0 20px 20px 20px;
        .title-one {
          .wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            h5 {
              height: 48px;
            }
            .sub-tab-list {
              display: flex;
              .sub-tab-item {
                color: #417FC8;
                width: 60px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                cursor: pointer;
                &.active {
                  color: #fff;
                }
              }
              .sub-tab-item + .sub-tab-item {
                margin-left: 6px;
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
          height: calc(100% - 50px);
          .camera-item {
            display: flex;
            flex-direction: column;
            width: 49.23%;
            height: 50%;
            margin: 0;
            .title-one {
              display: flex;
              align-items: center;
              height: 44px;
            }
            .media-content {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              flex: 1;
              padding: 4px;
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
