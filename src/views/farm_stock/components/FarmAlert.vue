<template>
  <div class="farm-alert-container">
    <dv-scroll-board :config="config" style="width:100%;height:240px"/>
  </div>
</template>
<script>
import constants from '@/util/constants';
export default {
  name: 'FarmAlert',
  data() {
    return {
      config: {
        header: ['预警类型', '预警详情', '发出时间', '处理状态'],
        data: this.$util.serializeAlertData(constants.alertList),
        index: true,
        headerHeight: 50,
        columnWidth: [30, 140, 780],
        align: ['center']
      }
    };
  }
};
</script>
<style lang="scss" scoped>

</style>
