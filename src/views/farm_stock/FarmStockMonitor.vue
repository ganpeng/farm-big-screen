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
                <h5><i class="point"></i> 截图</h5>
              </div>
              <div class="left-media-content border-icon11"></div>
            </div>
            <div class="left-middle-content">
              <div class="title-one">
                <h5><i class="point"></i> 月度延时摄影</h5>
              </div>
              <div class="left-media-content border-icon11"></div>
            </div>
            <div class="left-bottom-content">
              <div class="title-one">
                <h5><i class="point"></i> 摄像头分布</h5>
              </div>
              <div class="left-media-content border-icon11"></div>
            </div>
          </div>
          <div class="right-content border-icon12"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FarmAsideNav from './components/FarmAsideNav';
export default {
  name: 'FarmStockMonitor',
  components: {FarmAsideNav},
  data() {
    return {
      activeIndex: 0
    };
  },
  methods: {
    changeTab(index) {
      this.activeIndex = index;
    }
  }
}
</script>
<style lang="scss" scoped>
.farm-stock-monitor {
  .title-wrapper {
    display: flex;
    justify-content: space-between;
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
    flex: 1;
    height: 100%;
    .tab-content-wrapper {
      display: flex;
      justify-content: space-between;
      height: 100%;
      .left-content {
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
          flex: 1;
          width: 100%;
        }
      }
      .right-content {
        width: 73.48%;
        height: 100%;
      }
    }
  }
}
</style>
