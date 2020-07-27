<template>
  <transition name="visible">
    <div v-if="visible" class="farm-desc-dialog">
      <div @click="hide" class="close-btn">
        <svg-icon icon-class="close_btn"></svg-icon>
      </div>
      <div class="title">{{farm.name}}</div>
      <div class="info-content">
        <div class="basic-info-wrapper">
          <div class="title-one small">
            <h5>
              <svg-icon class="title-icon" icon-class="basic_info_icon"></svg-icon>基本信息
            </h5>
          </div>
          <ul class="info-list">
            <li class="info-item">
              <div class="label">面积：</div>
              <div class="value">{{farm.area}}亩</div>
            </li>
            <li class="info-item">
              <div class="label">联系人：</div>
              <div class="value">{{farm.contactName}}</div>
            </li>
            <li class="info-item">
              <div class="label">电话：</div>
              <div class="value">{{farm.contactTel}}</div>
            </li>
            <li class="info-item">
              <div class="label">地址：</div>
              <div class="value">{{farm.contactAddr}}</div>
            </li>
          </ul>
          <ul class="farm-tag-list">
            <li v-for="(tag, index) in farm.tagList" :key="index" class="farm-tag-item">{{tag}}</li>
          </ul>
        </div>
        <div class="desc border-icon10">{{farm.description}}</div>
        <div class="map-container">
          <div class="title-one small">
            <h5>
              <svg-icon class="title-icon" icon-class="farm_position_icon"></svg-icon>农场位置
            </h5>
          </div>
          <div id="mini-map"></div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "FarmDescDialog",
  props: {
    farm: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      visible: false,
      map: null
    };
  },
  computed: {
    tagList() {
      return this.farm.farmMarks || [];
    },
    lnglat() {
      return this.farm.longitude && this.farm.latitude
        ? [this.farm.longitude, this.farm.latitude]
        : [];
    }
  },
  methods: {
    async show() {
      try {
        this.visible = true;
        await this.$nextTick();
        this.mapInit();
      } catch (err) {
        console.log(err);
      }
    },
    hide() {
      this.visible = false;
    },
    async mapInit() {
      try {
        this.map = new window.AMap.Map("mini-map", {
          // 设置地图的显示样式
          mapStyle: "amap://styles/93f622ecbb8e8a4ed4f6b40967ef3857",
          zoom: 7,
          zooms: [7, 21]
        });
        let marker = new window.AMap.Marker({
          icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
          position: new window.AMap.LngLat(116.39, 39.9)
        });
        this.map.add(marker);
        if (this.lnglat.length === 2) {
          this.map.setCenter(this.lnglat);
          marker.setPosition(this.lnglat);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.farm-desc-dialog {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 0;
  width: 20%;
  height: 100%;
  background: rgba(11, 20, 43, 0.95);
  border: 2px solid rgba(31, 64, 113, 1);
  .title {
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: linear-gradient(
      270deg,
      rgba(16, 37, 75, 0.1) 0%,
      rgba(21, 46, 89, 0.36) 16%,
      rgba(32, 68, 122, 1) 53%,
      rgba(36, 75, 129, 0.24) 93%,
      rgba(37, 76, 130, 0.1) 100%
    );
    font-size: 16px;
    color: #f0f0f0;
    font-weight: 500;
    text-align: center;
  }
  .info-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 10px 20px;
    .basic-info-wrapper {
      height: 22%;
      .info-list {
        .info-item {
          display: flex;
          align-items: flex-start;
          font-size: 12px;
          line-height: 20px;
          color: #9fa8b8;
          margin-top: 8px;
          .label {
            white-space: nowrap;
          }
        }
      }
      .farm-tag-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 10px;
        margin-bottom: 20px;
        .farm-tag-item {
          font-size: 12px;
          color: #9fa8b8;
          height: 26px;
          line-height: 26px;
          text-align: center;
          padding: 0 10px;
          background: rgba(16, 37, 75, 0.8);
          border-radius: 4px;
          border: 1px solid rgba(65, 127, 200, 1);
        }
        .farm-tag-item + .farm-tag-item {
          margin-left: 10px;
        }
      }
    }
    .desc {
      width: 100%;
      height: 36%;
      font-size: 14px;
      line-height: 16px;
      color: #9fa8b8;
      padding: 20px;
    }
    .map-container {
      width: 100%;
      height: 42%;
      .title-one {
        margin: 5% 0;
      }
      #mini-map {
        height: 80%;
      }
    }
  }
  .close-btn {
    position: absolute;
    right: 20px;
    top: 10px;
    cursor: pointer;
    .svg-icon {
      width: 16px;
      height: 16px;
    }
  }
}
// 动画
.visible-enter-active {
  transition: all 0.3s ease;
}
.visible-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.visible-enter,
.visible-leave-to {
  transform: translateX(280px);
  opacity: 0;
}
</style>