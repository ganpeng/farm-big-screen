<template>
  <div class="label-tag">
    <template v-if="config">
      <div class="label-item" v-for="(item, index) in config.data" :key="index">
        <div :style="`background-color: ${config.color[index % config.color.length]};`"/>
        {{item.name}}
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "LabelTag",
  props: {
    config: {
      type: Object,
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
