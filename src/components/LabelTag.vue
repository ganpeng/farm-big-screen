<template>
  <div class="label-tag">
    <template v-if="labelList">
      <div class="label-item" v-for="(item, index) in labelList" :key="index">
        <div :style="`background-color: ${item.color};`"/>
        {{item.name}}
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "LabelTag",
  props: {
    labelList: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
.label-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  .label-item {
    margin: 5px;
    font-size: 12px;
    display: flex;
    align-items: center;
    color: #9FA8B8;
    div {
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }
  }
}
</style>
