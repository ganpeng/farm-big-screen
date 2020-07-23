<template>
  <div class="sensor-data-container">
    <div v-for="(bord, index) in list" :key="index" class="sensor-item">
      <dv-border-box-7 :color="[] | borderColor">
        <div class="sensor-item-inner">
          <div class="label">
            <div class="line"></div>
            <div class="title">{{bord.title}}</div>
          </div>
          <div class="value">{{bord.count}}</div>
        </div>
      </dv-border-box-7>
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

}
</style>
