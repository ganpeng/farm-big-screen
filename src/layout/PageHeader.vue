<template>
  <div class="header-container">
    <dv-border-box-13>
      <div class="nav-container">
        <ul class="nav-list">
          <li v-for="(nav, index) in navList" :key="index"
            @click="goPage(nav)"
            :class="['nav-item', activeMenu === nav.path && 'active']">
            {{nav.title}}
          </li>
        </ul>
      </div>
    </dv-border-box-13>
  </div>
</template>
<script>
export default {
  name: 'PageHeader',
  data() {
    return {
      navList: [
        {
          title: '首页',
          name: 'Home',
          path: '/home/index'
        },
        {
          title: '农业资产',
          name: 'FarmStock',
          path: '/farmstock/index'
        },
        {
          title: '销售数据',
          name: 'Sale',
          path: '/sale/index'
        },
        {
          title: '仓储物流',
          name: 'Storage',
          path: '/storage/index'
        },
        {
          title: '5G网络',
          name: 'Internet',
          path: '/internet/index'
        }
      ]
    };
  },
  computed: {
    activeMenu() {
      const route = this.$route;
      const {meta, path} = route;
      if (meta.activeMenu) {
        return meta.activeMenu;
      }
      return path
    }
  },
  methods: {
    goPage(nav) {
      if (this.$route.path !== nav.path) {
        this.$router.push({name: nav.name});
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header-container {
  height: 100px;
  margin-bottom: 10px;
  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    .nav-list {
      display: flex;
      align-items: center;
      .nav-item {
        height: 40px;
        line-height: 40px;
        margin-left: 20px;
        cursor: pointer;
        color: #417FC8;
        font-size: 16px;
        font-weight: 500;
        &.active {
          color: #70CAEE;
        }
      }
    }
  }
}
</style>
