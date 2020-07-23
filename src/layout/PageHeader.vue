<template>
  <div class="header-container">
    <div class="header-warpper">
      <div class="logo">
        <div class="logo-icon">
          <svg-icon icon-class="logo"></svg-icon>
        </div>
        <h2>吉视农业物联网大数据平台</h2>
      </div>
      <div class="nav-container">
        <div class="nav-icon">
          <svg-icon icon-class="nav_left_icon"></svg-icon>
        </div>
        <ul class="nav-list">
          <li v-for="(nav, index) in navList" :key="index"
            @click="goPage(nav)"
            :class="['nav-item', activeMenu === nav.path && 'active']">
            {{nav.title}}
          </li>
        </ul>
        <div class="nav-icon">
          <svg-icon icon-class="nav_left_icon"></svg-icon>
        </div>
      </div>
      <div class="date"></div>
    </div>
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
  height: 80px;
  padding: 16px 20px 4px 20px;
  background-color: #0B172D;
  .header-warpper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    background: url('../assets/image/header_border_icon.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .logo {
      display: flex;
      align-items: center;
      width: 400px;
      height: 46px;
      line-height: 46px;
      margin-left: 10px;
      background: url('../assets/image/logo_bg.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .logo-icon {
        width: 32px;
        height: 39px;
        margin: 0 8px;
        .svg-icon {
          width: 32px;
          height: 39px;
        }
      }
      h2 {
        color: #99D8FF;
        font-size: 18px;
        font-weight: 500;
      }
    }
    .nav-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      .nav-icon {
        .svg-icon {
          width: 46px;
          height: 14px;
        }
      }
      .nav-list {
        display: flex;
        align-items: center;
        .nav-item {
          width: 128px;
          height: 36px;
          line-height: 36px;
          cursor: pointer;
          color: #417FC8;
          font-size: 16px;
          font-weight: 500;
          text-align: center;
          background: url('../assets/image/nav_bar_icon.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
          &.active {
            color: #70CAEE;
            background: url('../assets/image/nav_bar_icon_active.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
          }
        }
        .nav-item + .nav-item {
          margin-left: -14px;
        }
      }
    }
    .date {
    }
  }
}
</style>
