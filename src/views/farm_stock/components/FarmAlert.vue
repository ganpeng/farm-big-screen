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
        headerBGC: '#11294D',
        oddRowBGC: '#0E1831', // 奇数行
        evenRowBGC: '#0D1F3A', // 偶数行
        headerHeight: 40,
        columnWidth: [50, 140, 780],
        align: ['center']
      }
    };
  }
};
</script>
<style lang="scss" scoped>

</style>
