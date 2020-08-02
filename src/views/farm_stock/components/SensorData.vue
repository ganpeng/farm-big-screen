<template>
  <div class="sensor-data-container">
    <div v-for="(sensor, index) in sensorRealList" :key="index"
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
import constants from '@/util/constants';
export default {
  name: 'SensorData',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    sensorRealList() {
      return this.list.length > 0 ? this.list : constants.sensorRealList;
    }
  },
  data() {
    return {};
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
    // height: 60px;
    height: 0.6rem;
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
      padding: 0.1.4rem;
      .text {
        font-size: 0.12rem;
        .title {
          color: #417FC8;
        }
        .value {
          color: #68E0E3;
        }
      }
      .icon {
        .svg-icon {
          width: 0.2rem;
          height: 0.2rem;
        }
      }
    }
  }
  .sensor-item + .sensor-item {
    margin-left: 0.2rem;
  }
}
</style>
