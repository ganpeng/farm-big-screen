<template>
  <div class="label-tag">
    <template v-if="labelList">
      <div v-for="(list, index) in splitedLabelList" :key="index" class="label-item-wrapper">
        <div class="label-item" v-for="(item) in list" :key="item.name">
          <div :style="`background-color: ${item.color};`"/>
          {{item.name}}
        </div>
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
  },
  computed: {
    splitedLabelList() {
      let list = this.spArr(this.labelList, 6);
      return list;
    }
  },
  methods: {
    spArr(arr, num) { //arr是你要分割的数组，num是以几个为一组
      let newArr = [] //首先创建一个新的空数组。用来存放分割好的数组
      for (let i = 0; i < arr.length;) { //注意：这里与for循环不太一样的是，没有i++
        newArr.push(arr.slice(i, i += num));
      }
      return newArr
    }
  }
};
</script>
<style lang="scss" scoped>
.label-tag {
  .label-item-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
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
