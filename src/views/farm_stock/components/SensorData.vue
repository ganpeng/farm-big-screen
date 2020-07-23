<template>
  <div class="sensor-data-container">
    <div v-for="(bord, index) in list" :key="index" class="sensor-item">
      <div class="sensor-item-inner">
        <div class="text">
          <div class="title">{{bord.title}}</div>
          <div class="value">{{bord.value}}</div>
        </div>
        <div class="icon"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SensorData',
  props: {
    // list: {
    //   type: Array,
    //   default: () => []
    // }
  },
  data() {
    return {
      list: [
        {
          title: '温度',
          value: '27℃'
        },
        {
          title: '湿度',
          value: '24.6%'
        },
        {
          title: '风速',
          value: '0m/s'
        },
        {
          title: '风向',
          value: '283°'
        },
        {
          title: '雨量',
          value: '450mm'
        },
        {
          title: '光照度',
          value: '332wlux'
        },
        {
          title: '大气压',
          value: '981hpa'
        },
        {
          title: '土壤温度',
          value: '27℃'
        },
        {
          title: '土壤湿度',
          value: '10.3%'
        },
        {
          title: 'PH值',
          value: '10.8'
        }
      ]
    };
  }
}
</script>
<style lang="scss" scoped>
.sensor-data-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .sensor-item {
    position: relative;
    flex: 1;
    height: 80px;
    background: url('../../../assets/image/border_icon.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .border {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .sensor-item-inner {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 20px;
      .text {
        .title {
          color: #F0F0F0;
        }
        .value {
          color: #68E0E3;
        }
      }
      .icon {

      }
    }
  }
  .sensor-item + .sensor-item {
    margin-left: 20px;
  }
}
</style>
