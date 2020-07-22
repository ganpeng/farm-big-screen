<template>
  <div class="my-map">
    <div id="farm-map"></div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import Vue from "vue/dist/vue.esm.js";
export default {
  name: "FarmMap",
  props: {
    setMapCenterHandler: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      map: null,
      DistrictCluster: null,
      PointSimplifier: null,
      districtCluster: null,
      pointSimplifier: null,
      myInfoWindow: null
    };
  },
  async mounted() {
    try {
      await this.mapInit();
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    async mapInit() {
      try {
        this.map = new window.AMap.Map("farm-map", {
          // 设置地图的显示样式
          mapStyle: "amap://styles/93f622ecbb8e8a4ed4f6b40967ef3857",
          zoom: 7,
          zooms: [7, 21]
        });

        const {
          DistrictCluster,
          PointSimplifier
        } = await this.loadUiComponents();
        this.DistrictCluster = DistrictCluster;
        this.PointSimplifier = PointSimplifier;
        this.districtCluster = this.initDistrictCluster();
        this.pointSimplifier = this.initPointSimplifier();
        this.myInfoWindow = this.initMyInfoWindow();

        // 绑定事件
        this.map.on("zoomend", this.mapZoomendHandler.bind(this));
        this.map.on("moveend", this.mapMoveendHandler.bind(this));
        this.districtCluster.on("clusterMarkerClick", this.clusterMarkerClickHandler);

        let dataItem = ["126.118338,45.11481", "125.254523,43.829852", "125.227551,43.904597", "125.265486,43.869571", "125.211959,43.809576", "125.345618,43.832965", "125.585406,42.443841", "125.613058,43.943362", "125.334143,43.917075", "125.279227,43.858107", "125.394616,43.86454", "125.290277,43.822228"];
        this.districtCluster.setData(dataItem);
        this.map.setCity('吉林省');
      } catch (e) {
        console.log(e);
      }
    },
    getData() {
      return axios.get("https://a.amap.com/amap-ui/static/data/10w.txt");
    },
    loadUiComponents() {
      return new Promise((resolve) => {
        window.AMapUI.load(
          ["ui/geo/DistrictCluster", "ui/misc/PointSimplifier"],
          (DistrictCluster, PointSimplifier) => {
            resolve({
              DistrictCluster,
              PointSimplifier
            });
          }
        );
      });
    },
    initDistrictCluster() {
      return new this.DistrictCluster({
        map: this.map, // 所属的地图实例
        zIndex: 11,
        getPosition: item => {
          if (!item) {
            return null;
          }
          var parts = item.split(",");
          // 返回经纬度
          return [parseFloat(parts[0]), parseFloat(parts[1])];
        },
        renderOptions: {
          // 区划面的基本样式。该参数优先级最低。
          featureStyle: {
            // 填充色，比如 red, rgb(255,0,0), rgba(0,0,0,1)等
            fillStyle: "rgba(15, 43, 183, 0.5)",
            // 描边宽度
            lineWidth: 1,
            // 描边颜色
            strokeStyle: "rgb(129, 167, 255)",
            // 鼠标Hover时的样式, 可以为null
            hoverOptions: null
          },
          // 按区划级别（如下4类）定义的区划面样式，优先级高于 featureStyle
          featureStyleByLevel: {
            // 各级别下参数同featureStyle
            country: {},
            province: {},
            city: {},
            district: {}
          },
          // 直接指定某个区划的样式，优先级最高
          // @param  Object feature 区划的Feature信息
          // @param  {Array} dataItems 区划内的点的信息
          // @return {Object，见featureStyle} 返回该区划的样式
          getFeatureStyle: (feature, dataItems) => {
            if (dataItems.length > 0) {
              return {
                fillStyle: "rgb(30,85,255)"
              };
            } else {
              return {
                fillStyle: "rgb(15, 43, 183)"
              };
            }

            return {
              fillStyle: "rgb(15, 43, 183)"
            };
          },
          featureEventSupport: true,
          clusterMarkerEventSupport: true,
          clusterMarkerEventNames: ["click"],
          // 显示在所辖数据点的平均位置
          // getClusterMarkerPosition: this.DistrictCluster.ClusterMarkerPositionStrategy.AVERAGE_POINTS_POSITION,
          getClusterMarker: (feature, dataItems, recycledMarker) => {
            // label内容
            var content = `<div class="device-custom-marker">
                              <div class="mark-text-wrapper">
                                  <div class="mark-text">${dataItems.length}</div>
                              </div>
                              <div class="mark-icon"></div>
                          </div>`;
            var label = {
              offset: new window.AMap.Pixel(0, 0), // 修改label相对于marker的位置
              // ----------要改等级---------
              // content: this.map.getZoom() > 13 ? content : null
              content: content
            };
            if (dataItems.length > 0) {
              // 存在可回收利用的marker
              if (recycledMarker) {
                // 直接更新内容返回
                recycledMarker.setLabel(label);
                return recycledMarker;
              }
              // 返回一个新的Marker
              return new window.AMap.Marker({
                // ----------要改等级---------
                // label: map.getZoom() > 13 ? label : null,
                label: label
              });
            }
          }
        }
      });
    },
    initPointSimplifier() {
      return new this.PointSimplifier({
        map: this.map, //所属的地图实例
        zIndex: 110,
        autoSetFitView: false, //禁止自动更新地图视野
        getPosition: item => {
          return item.position;
        },
        getHoverTitle: (data) => {
          this.addPointMarker(data);
        },
        renderOptions: {
          //点的样式
          pointStyle: {
            width: 15,
            height: 15,
            fillStyle: "rgba(0,221,76,1)"
          },
          pointHoverStyle: {
            width: 20,
            height: 20,
            fillStyle: "rgba(0,221,76,1)"
          },
          //鼠标hover时的title信息
          hoverTitleStyle: {
            position: "top"
          }
        }
      });
    },
    initMyInfoWindow() {
      return new window.AMap.InfoWindow({
        isCustom: true, //使用自定义窗体
        closeWhenClickMap: true, // 点击地图关闭信息窗口
        autoMove: false,
        content: "",
        anchor: "top-right"
      });
    },
    //  一些地图的事件
    async clusterMarkerClickHandler(e, record) {
      try {
        const zoom = this.map.getZoom();
        if (zoom < 8) {
          // 如果层级太小直接返回
          return false;
        }

        const result = await this.getClusterRecordByAdcode(record.adcode);
        // currentAdcode已经更新，有新的点击
        if (result.adcode !== record.adcode) {
          return false;
        }
        // 设置数据
        this.pointSimplifier.setData(result.dataItems);
      } catch (err) {
        console.log(err);
      }
    },
    getClusterRecordByAdcode(adcode) {
      return new Promise((resolve, reject) => {
        //获取该节点的聚合信息
        this.districtCluster.getClusterRecord(adcode, (error, result) => {
          if (error) {
            reject(new Error("获取节点聚合信息失败"));
          } else {
            resolve(result);
          }
        });
      });
    },
    // 地图层级缩放时候的事件
    async mapZoomendHandler() {
      try {
        const zoom = this.map.getZoom();
        if (zoom < 10) {
          // 显示隐藏的时候可以使用如下方法 this.pointSimplifier.hide(); this.pointSimplifier.show();
          this.pointSimplifier.setData([]);
        }
      } catch (err) {
        console.log(err);
      }
    },
    async mapMoveendHandler() {},
    addPointMarker(data) {
      let {position} = data;
      this.myInfoWindow.setContent(this.getPointSimplifierContent(data));
      this.myInfoWindow.open(this.map, position);
    },
    getPointSimplifierContent(data) {
      let template = `<div class="mark-info-window-container point-simplifier">
                        <div class="title">吉林市意禾田家庭生态农场</div>
                        <ul class="mark-info-list">
                            <li class="mark-info-item">面积：1,500亩</li>
                            <li class="mark-info-item">位置：N44°0′43.56″E126°19′50.08″</li>
                            <li class="mark-info-item">总产量：1,385吨</li>
                            <li class="mark-info-item">总产值：709,600元</li>
                            <li class="mark-info-item">总收入：750,160元</li>
                            <li class="mark-info-item">地址：吉林市昌邑区孤店子镇孤家子村</li>
                        </ul>
                        <div class="enter-btn" v-on:click="farmDetail()">进入农场></div>
                    </div>`;
      let MyComponent = Vue.extend({
        template,
        methods: {
          farmDetail: () => {
            this.gotoFarmDetail();
          }
        }
      });
      let component = new MyComponent().$mount();
      return component.$el;
    },
    gotoFarmDetail() {
      console.log('farmDetail');
    }
  }
};
</script>
<style lang="scss" scoped>
.my-map {
  width: 100%;
  height: 100%;
  #farm-map {
    width: 100%;
    height: 100%;
  }
}
</style>
<style lang="scss">
#farm-map {
  .amap-marker {
    .amap-icon {
      display: none;
    }
    .amap-marker-label {
      padding: 0;
      border: none;
      background-color: transparent;
      .device-custom-marker {
        cursor: pointer;
        text-align: center;
        .mark-text-wrapper {
          padding: 2px;
          border: 2px solid transparent;
          box-shadow: 0px 0px 6px transparent;
          border-radius: 20px;
          .mark-text {
            height: 16px;
            line-height: 16px;
            padding: 0 10px;
            color: #0f2bb7;
            background: rgba(24, 251, 252, 1);
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.28);
            border-radius: 16px;
          }
        }
        .mark-icon {
          display: inline-block;
          width: 16px;
          height: 42px;
          background-image: url("../assets/image/farm-mark.png");
          background-repeat: no-repeat;
          background-position: top center;
          background-size: contain;
          transform: scale(0.8);
        }
      }
      &:hover {
        .mark-text-wrapper {
          border: 2px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0px 0px 6px rgba(24, 251, 252, 1);
          .mark-text {
            color: #0f2bb7;
            background-color: #fff;
          }
        }
        .mark-icon {
          background-image: url("../assets/image/farm-mark-hover.png");
        }
      }
    }
  }
  .mark-info-window-container {
    position: relative;
    width: 325px;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid rgba(59, 180, 255, 1);
    border-radius: 4px;
    padding: 10px 28px 40px 28px;
    &.point-simplifier {
      width: 400px;
    }
    .title {
      line-height: 22px;
      font-size: 20px;
      font-weight: 600;
      color: rgba(24, 251, 252, 1);
      margin: 10px 0 20px 0;
    }
    .mark-info-list {
      .mark-info-item {
        height: 38px;
        line-height: 38px;
        font-size: 18px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
    .enter-btn {
      position: absolute;
      font-size: 18px;
      font-weight: 400;
      color: rgba(24, 251, 252, 1);
      bottom: 10px;
      right: 28px;
      cursor: pointer;
    }
  }
}
</style>
