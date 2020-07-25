<template>
  <div class="farm-stock-warning-container container">
    <farm-aside-nav></farm-aside-nav>
    <div class="content">
      <div class="title-wrapper">
        <div class="farm-title">聚成现代农业发展专业合作社</div>
      </div>
      <my-bord :bordList="bordList"></my-bord>
      <div class="warning-table-container border-icon8">
        <dv-scroll-board class="my-scroll-board" :config="config"/>
      </div>
    </div>
  </div>
</template>
<script>
import MyBord from '@/components/MyBord';
import FarmAsideNav from "./components/FarmAsideNav";
import constants from '@/util/constants';
export default {
  name: "FarmStockWarning",
  components: { FarmAsideNav, MyBord },
  data() {
    return {
      bordList: constants.warningList,
      config: {
        header: ['预警编号', '设备ID/设备名称', '所属农场', '预警类型', '预警详情', '发出时间', '处理状态'].map((item) => {
          return `<span class="table-title">${item}</span>`;
        }),
        data: this.$util.serializeWarningData(constants.warningTableList),
        index: true,
        headerBGC: '#11294D',
        oddRowBGC: '#0E1831', // 奇数行
        evenRowBGC: '#0D1F3A', // 偶数行
        headerHeight: 50,
        rowNum: 10,
        columnWidth: [50, 240, 200, 120, 120, 780],
        align: ['center']
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.farm-stock-warning-container {
  .warning-table-container {
    position: relative;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    .my-scroll-board {
      position: absolute;
      width: 99%;
      height: 98%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: rgba(28,86,165, 0.5) 0px 0px 15px;
    }
  }
}
</style>
<style lang="scss">

</style>

