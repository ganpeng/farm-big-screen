<template>
  <div class="farm-stock-data-container container">
    <farm-aside-nav></farm-aside-nav>
    <div class="content">
      <div class="title-wrapper">
        <div class="tab-list">
          <div class="tab-item">农场数据</div>
          <div class="tab-item">设备数据</div>
        </div>
        <div class="farm-title">聚成现代农业发展专业合作社</div>
      </div>
    </div>
  </div>
</template>
<script>
import FarmAsideNav from './components/FarmAsideNav';
export default {
  name: 'FarmStockData',
  components: {FarmAsideNav}
}
</script>
<style lang="scss" scoped>
.farm-stock-data-container {
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
        color: #417FC8;
        background-color: #10254B;
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
}
</style>
