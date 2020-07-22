<template>
  <dv-full-screen-container class="layout-container">
    <page-header></page-header>
    <router-view></router-view>
  </dv-full-screen-container>
</template>
<script>
import PageHeader from './PageHeader';
export default {
  name: "Layout",
  components: {PageHeader},
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 80px;
}
</style>