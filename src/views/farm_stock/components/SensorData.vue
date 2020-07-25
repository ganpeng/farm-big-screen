<template>
  <div class="sensor-data-container">
    <div v-for="(sensor, index) in list" :key="index" 
      :class="['sensor-item', sensor.isWarning && 'is-warning', sensor.isDanger && 'is-danger']">
      <div class="sensor-item-inner">
        <div class="icon">
          <svg-icon :icon-class="sensor.icon"></svg-icon>
        </div>
        <div class="text">
          <div class="title">{{sensor.title}}</div>
          <div class="value">{{sensor.value}}</div>
        </div>
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
          value: '27℃',
          icon: 'sensor_icon1'
        },
        {
          title: '湿度',
          value: '24.6%',
          icon: 'sensor_icon2'
        },
        {
          title: '风速',
          value: '0m/s',
          icon: 'sensor_icon3'
        },
        {
          title: '风向',
          value: '283°',
          icon: 'sensor_icon4'
        },
        {
          title: '雨量',
          value: '450mm',
          icon: 'sensor_icon5'
        },
        {
          title: '光照度',
          value: '332wlux',
          icon: 'sensor_icon6'
        },
        {
          title: '大气压',
          value: '981hpa',
          icon: 'sensor_icon7'
        },
        {
          title: '土壤温度',
          value: '27℃',
          icon: 'sensor_icon8'
        },
        {
          title: '土壤湿度',
          value: '10.3%',
          icon: 'sensor_icon9'
        },
        {
          title: 'PH值',
          value: '10.8',
          isWarning: true,
          icon: 'sensor_icon10'
        },
        {
          title: '电导率',
          value: '11us/cm',
          icon: 'sensor_icon11'
        },
        {
          title: '捕虫量',
          value: '592个',
          isDanger: true,
          icon: 'sensor_icon12'
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
    height: 60px;
    background: url('../../../assets/image/border_icon.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    &.is-warning {
      background: url('../../../assets/image/sensor_warning.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    &.is-danger {
      background: url('../../../assets/image/sensor_danger.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
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
      justify-content: space-around;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 20px;
      .text {
        font-size: 12px;
        .title {
          color: #417FC8;
        }
        .value {
          color: #68E0E3;
        }
      }
      .icon {
        .svg-icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .sensor-item + .sensor-item {
    margin-left: 20px;
  }
}
</style>
