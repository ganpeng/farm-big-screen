<template>
  <!-- <dv-full-screen-container :style="paddingBottomStyle" class="layout-container">
    <page-header></page-header>
    <router-view></router-view>
  </dv-full-screen-container> -->
  <div :style="paddingBottomStyle" class="layout-container">
    <page-header></page-header>
    <router-view></router-view>
  </div>
</template>
<script>
import PageHeader from './PageHeader';
export default {
  name: "Layout",
  components: {PageHeader},
  data() {
    return {
      height: 80
    };
  },
  computed: {
    paddingBottomStyle() {
      return `padding-bottom: ${this.height}px`;
    }
  },
  created() {
    let height = window.outerHeight - window.innerHeight;
    this.height = height;
  }
};
</script>
<style lang="scss" scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  // height: 100%;
  width: 1920px;
  height: 1080px;
  background-color: #0A0C22;
  transform: left top;
  transform: scale(0.3, 1);
}
</style>