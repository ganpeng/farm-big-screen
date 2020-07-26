<template>
  <transition name="visible">
    <div v-if="visible" class="farm-desc-dialog">
      <div @click="hide" class="close-btn">
        <svg-icon icon-class="close_btn"></svg-icon>
      </div>
      <div class="title">
        聚成现代农业发展专业合作社 
      </div>
      <div class="info-content">
        <div class="title-one small">
          <h5>
            <svg-icon class="title-icon" icon-class="basic_info_icon"></svg-icon>
            基本信息
          </h5>
        </div>
        <ul class="info-list">
            <li class="info-item">面积：1,500亩</li>
            <li class="info-item">联系人：李欣莲</li>
            <li class="info-item">电话：13893221214</li>
            <li class="info-item">地址：吉林市昌邑区孤店子镇孤家子村</li>
        </ul>
        <ul class="farm-tag-list">
          <li v-for="(tag, index) in farm.tagList" :key="index" 
            class="farm-tag-item">
            {{tag}}
          </li>
        </ul>
        <div class="desc border-icon10">
          {{farm.desc}}
        </div>
        <div class="title-one small">
          <h5>
            <svg-icon class="title-icon" icon-class="farm_position_icon"></svg-icon>
            农场位置
          </h5>
        </div>
        <div class="map-container">
          <div id="mini-map"></div>
        </div>
      </div>
    </div>  
  </transition>
</template>
<script>
export default {
  name: 'FarmDescDialog',
  data() {
    return {
      visible: false,
      map: null,
      lnglat: [116.39, 39.9],
      farm: {
        tagList: ['美式农场', '人工除草', '绿色农场'],
        desc: ' 聚成现代农业发展专业合作社，位于吉林省伊通满族自治县伊通镇，是集农产品种植、加工、销售，家庭农场旅游度假、特色农产品采摘于一体的现代农业品牌。聚成现代农业发展专业合作社位于有“中国粳稻贡米之乡”之称的吉林市，这里属长白山水系松花江流域，水质清澈、土质肥沃，出产的农产品食品备受广大消费者青睐。聚成现代农业发展专业合作社依托于得天独厚的自然条件，耕种自有土地1000余亩，采用美式农场管理方式，自种植至收割均采取科学的方法进行管理和监控，适时收割、储运，限量生产、出售，种植管理全程可追溯，打造出纯正的生态农业产业链。保证产品的鲜度、口感和营养峰值。'
      }
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
  background: rgba(11,20,43,0.95);
  border: 2px solid rgba(31,64,113,1);
  .title {
    width: 100%;
    height:40px;
    line-height: 40px;
    background:linear-gradient(270deg,rgba(16,37,75,0.1) 0%,rgba(21,46,89,0.36) 16%,rgba(32,68,122,1) 53%,rgba(36,75,129,0.24) 93%,rgba(37,76,130,0.1) 100%);
    font-size: 16px;
    color: #f0f0f0;
    font-weight: 500;
    text-align: center;
  }
  .info-content {
    flex: 1;
    padding: 10px 20px;
    .info-list {
      .info-item {
        font-size: 12px;
        line-height: 24px;
        color: #9FA8B8; 
        margin-top: 10px;
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
        color: #9FA8B8;
        height:26px;
        line-height: 26px;
        text-align: center;
        padding: 0 10px;
        background: rgba(16,37,75, 0.8);
        border-radius: 4px;
        border: 1px solid rgba(65,127,200,1);
      }
      .farm-tag-item + .farm-tag-item {
        margin-left: 10px;
      }
    }
    .desc {
      width: 100%;
      height: 32%;
      font-size: 12px;
      line-height: 16px;
      color: #9FA8B8;
      padding: 20px;
      margin-bottom: 20px;
    }
    .map-container {
      width: 100%;
      height: 30%;
      margin-top: 20px;
      #mini-map {
        height: 100%;
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
    transition: all .3s ease;
}
.visible-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.visible-enter, .visible-leave-to {
    transform: translateX(280px);
    opacity: 0;
}
</style>