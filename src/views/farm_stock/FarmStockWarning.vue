<template>
  <div class="farm-stock-warning-container container">
    <farm-aside-nav></farm-aside-nav>
    <div class="content">
      <div class="title-wrapper">
        <div class="farm-title">{{farm.name}}</div>
      </div>
      <my-bord :bordList="bordList"></my-bord>
      <div class="warning-table-container border-icon8">
        <dv-scroll-board class="my-scroll-board" :config="config"/>
      </div>
    </div>
  </div>
</template>
<script>
import _ from 'lodash';
import {mapGetters, mapActions} from 'vuex';
import MyBord from '@/components/MyBord';
import FarmAsideNav from "./components/FarmAsideNav";
export default {
  name: "FarmStockWarning",
  components: { FarmAsideNav, MyBord },
  data() {
    return {
      warningList: [],
      bordList: [],
      warnTypeOption: {
        'DEVICE_ERROR': '设备异常',
        'MODEL_WARN': '模型预警'
      },
      statusOption: {
        'HANDLED': '已处理',
        'UNHANDLED': '未处理',
        'RECOVER': '自动恢复'
      }
    };
  },
  async created() {
    try {
      let {id} = this.$route.params;
      await this.getFarmById(id);
      let res = await this.$service.getWarningList({pageSize: 10000});
      let res2 = await this.$service.getWarnStatisticsByFarmId(id);
      if (res && res.code === 0) {
        this.warningList = res.data.list;
      }
      if (res2 && res2.code === 0) {
        let bordList = [];
        let total = _.get(res2.data, 'total');
        let modelWarnTotal = _.get(res2.data, 'modelWarnTotal');
        let deviceErrorTotal = _.get(res2.data, 'deviceErrorTotal');
        let handledTotal = _.get(res2.data, 'handledTotal');
        let unHandledTotal = _.get(res2.data, 'unHandledTotal');
        bordList.push({
          title: '总数',
          count: total
        });
        bordList.push({
          title: '模型预警',
          count: modelWarnTotal
        });
        bordList.push({
          title: '设备状态异常',
          count: deviceErrorTotal
        });
        bordList.push({
          title: '已处理',
          count: handledTotal
        });
        bordList.push({
          title: '未处理',
          count: unHandledTotal
        });
        this.bordList = bordList;
      }
    } catch (err) {
      console.log(err);
    }
  },
  computed: {
    ...mapGetters({
      dict: 'dict/dict',
      farm: 'farm/currentFarm'
    }),
    metricList() {
      return this.dict.metric || [];
    },
    config() {
      let data = this.serializeAlertData(this.warningList);
      return {
        header: ['预警编号', '设备ID/设备名称', '所属农场', '预警类型', '预警详情', '发出时间', '处理状态'].map((item) => {
          return `<span class="table-title">${item}</span>`;
        }),
        data,
        headerBGC: '#11294D',
        oddRowBGC: '#0E1831', // 奇数行
        evenRowBGC: '#0D1F3A', // 偶数行
        headerHeight: 50,
        rowNum: 10,
        // columnWidth: [340, 200, 120, 120, 680],
        align: ['center']
      };
    }
  },
  methods: {
    ...mapActions({
      getFarmById: 'farm/getFarmById'
    }),
    serializeAlertData() {
      return this.warningList.map((item) => {
        let res = [];
        // &uarr;上升 &darr;下降
        let description = '';
        if (_.isArray(item.description)) {
          description = item.description.reduce((prev, curr) => {
            let {metric, up, value, low, min, max} = curr;
            let obj = this.metricList.find((item) => item.value === metric.toUpperCase());
            let name = _.get(obj, 'name') || '';
            let unit = _.get(obj, 'unit') || '';
            prev += `${name}: ${value}${unit},`;
            if (up && max && value) {
              if (parseFloat(value) > parseFloat(max)) {
                prev += `<span class="up-danger">&uarr;${up}${unit}</span>,`;
              } else {
                prev += `<span>&uarr;${up}</span>,`;
              }
            }
            prev += ' ';
            if (max) {
              prev += `最高阈值: ${max}${unit}`;
            }
            prev += ' ';
            if (low && min && value) {
              if (parseFloat(value) < parseFloat(min)) {
                prev += `<span class="low-danger">&darr;${low}</span>,`;
              } else {
                prev += `<span>&darr;${low}</span>, `;
              }
            }
            if (min) {
              prev += `最低阈值: ${min}`;
            }
            return prev;
          }, '');
        } else {
          description = item.description.description;
        }
        res.push(item.warnCode);
        res.push(item.deviceName);
        res.push(item.farmName);
        res.push(this.warnTypeOption[item.warnType]);
        res.push(description);
        res.push(this.$util.dateFormat('mm-dd HH:MM:SS', new Date(item.warnTime)));

        let status = '';
        switch (item.status) {
          case 'HANDLED':
                status = `<span class="status-two">${this.statusOption[item.status]}</span>`;
                break;
          case 'UNHANDLED':
                status = `<span class="status-one">${this.statusOption[item.status]}</span>`;
                break;
          case 'RECOVER':
                status = `<span class="status-three">${this.statusOption[item.status]}</span>`;
                break;
          default:
        }
        res.push(status);
        return res;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.farm-stock-warning-container {
  .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 8.1632%;
  }
  .warning-table-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 79.5918%;
    .my-scroll-board {
      position: absolute;
      width: 99%;
      height: 98%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #9FA8B8;
      box-shadow: rgba(28,86,165, 0.5) 0px 0px 15px;
    }
  }
}
</style>
<style lang="scss">

</style>

