<template>
  <div class="container">
    <farm-aside-nav></farm-aside-nav>
    <div class="content"></div>
  </div>
</template>
<script>
import FarmAsideNav from './components/FarmAsideNav';
export default {
  name: 'FarmStockMonitor',
  components: {FarmAsideNav}
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  height: 100%;
  .content {
    flex: 1;
  }
}
</style>
