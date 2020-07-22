<template>
  <div class="container">
    <farm-aside-nav></farm-aside-nav>
    <div class="content">
      <div class="farm-title">聚成现代农业发展专业合作社</div>
      <my-bord :bordList="bordList"></my-bord>
      <div class="warning-table-container">
        <dv-border-box-7 :color="['#0B142B', '#1C56A5']">
          <dv-scroll-board class="my-scroll-board" :config="config"/>
        </dv-border-box-7>
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
.container {
  display: flex;
  height: 100%;
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 20px;
    .farm-title {
      width: 500px;
      height: 40px;
      line-height: 40px;
      margin: 0 auto;
      margin-bottom: 20px;
      color: #f0f0f0;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      background: linear-gradient(
        270deg,
        rgba(12, 30, 57, 0.2) 0%,
        rgba(20, 41, 79, 1) 50%,
        rgba(18, 41, 81, 0.1) 100%
      );
    }
    .warning-table-container {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      .my-scroll-board {
        width: 99%;
        height: 99%;
        margin: 2px auto;
      }
    }
  }
}
</style>
<style lang="scss">
.table-title {
  color: #70CAEE;
  font-size: 14px;
  font-weight: 500;
}
</style>

