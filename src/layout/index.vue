<template>
  <dv-full-screen-container :style="paddingBottomStyle" class="layout-container">
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
  height: 100%;
  background-color: #0A0C22;
}
</style>