<template>
  <div class="my-bord-status">
    <div v-for="(bord, index) in bordList" :key="index" class="status-item">
      <!-- <dv-border-box-7 :color="[] | borderColor"> -->
        <div class="status-item-inner">
          <div class="label">
            <div class="line"></div>
            <div class="title">{{bord.title}}</div>
          </div>
          <div class="value">{{bord.count}}</div>
        </div>
      <!-- </dv-border-box-7> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "MyBord",
  props: {
    bordList: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.my-bord-status {
  display: flex;
  width: 100%;
  font-weight: lighter;
  .status-item + .status-item {
    margin-left: 10px;
  }
  .status-item {
    display: flex;
    flex: 1;
    height: 100px;
    overflow: hidden;
    color: #bdbec2;
    background: url('../assets/image/border_icon.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .status-item-inner {
      display: flex;
      margin: 1px;
      padding: 18px;
      width: 100%;
      height: 98%;
      box-shadow:rgba(28,86,165, 0.5) 0px 0px 15px;
    }
    .label {
      display: flex;
      align-items: flex-start;
      flex: 1;
      .line {
        width: 2px;
        height: 20px;
        background: #17B3EA;
        margin-right: 8px;
      }
      .title {
        font-size: 14px;
        color: #9FA8B8;
      }
    }
    .value {
      display: flex;
      align-items: flex-end;
      font-size: 32px;
      color: #8ab9e8;
      line-height: 45px;
    }
  }
}
</style>
