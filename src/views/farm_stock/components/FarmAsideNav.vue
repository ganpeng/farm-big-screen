<template>
  <div class="farm-aside-nav-container">
    <div class="aside-list">
      <li @click="gotoPage(aside)" v-for="(aside, index) in asideList" :key="index"
        :class="['aside-item', aside.name === activeName && 'active']">
        {{aside.title}}
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FarmAsideNav',
  data() {
    return {
      asides: [
        {
          title: '概况',
          name: 'FarmStockSurvey',
          path: '/farmstock/id/survey'
        },
        {
          title: '数据',
          name: 'FarmStockData',
          path: '/farmstock/id/data'
        },
        {
          title: '监控',
          name: 'FarmStockMonitor',
          path: '/farmstock/id/monitor'
        },
        {
          title: '预警',
          name: 'FarmStockWarning',
          path: '/farmstock/id/warning'
        }
      ]
    };
  },
  computed: {
    activeName() {
      let {name} = this.$route;
      return name;
    },
    asideList() {
      let {id} = this.$route.params;
      return this.asides.map((aside) => {
        aside.path = aside.path.replace('id', id);
        return aside;
      });
    }
  },
  methods: {
    gotoPage(aside) {
      if (this.$route.path !== aside.path) {
        this.$router.push({path: aside.path});
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.farm-aside-nav-container {
  width: 100px;
  height: 100%;
  background-color: #0F1C34;
  .aside-list {
    .aside-item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80px;
      font-size: 16px;
      color: #9FA8B8;
      cursor: pointer;
      &.active {
        color: #fff;
        background-color: #2A3A5B;
      }
    }
  }
}
</style>
