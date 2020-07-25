<template>
  <div class="farm-stock-survey-container container">
    <farm-aside-nav></farm-aside-nav>
    <div class="content">
      <div class="sensor-data-wrapper">
        <sensor-data></sensor-data>
      </div>
      <div class="farm-container">
        <div @click="displayDescDialog" class="farm-desc-btn border-icon9">农场简介</div>
        <farm-desc-dialog ref="farmDescDialog"></farm-desc-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import FarmAsideNav from './components/FarmAsideNav';
import SensorData from './components/SensorData';
import FarmDescDialog from './components//FarmDescDialog';
export default {
  name: 'FarmStockSurvey',
  components: {FarmAsideNav, SensorData, FarmDescDialog},
  methods: {
    displayDescDialog() {
      this.$refs.farmDescDialog.show();
    }
  }
}
</script>
<style lang="scss" scoped>
.farm-stock-survey-container {
  &.container {
    .content {
      padding: 10px 0 0 0;
      .sensor-data-wrapper {
        padding: 0 20px;
      }
      .farm-container {
        position: relative;
        flex: 1;
        margin-top: 10px;
        background-image: url('../../assets/image/farm.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        .farm-desc-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 130px;
          height: 50px;
          line-height: 50px;
          font-size: 16px;
          font-weight: 500;
          color: #70CAEE;
          text-align: center;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
