<template>
  <div id="rose-chart">
    <dv-charts :option="option"/>
  </div>
</template>
<script>
import constants from '@/util/constants';
export default {
  name: "RoseChart",
  data() {
    return {
      option: {}
    };
  },
  methods: {
    createData() {
      const { randomExtend } = this;
      this.option = {
        series: [
          {
            type: "pie",
            radius: "70%",
            roseSort: false,
            data: [
              { name: "水稻", value: randomExtend(40, 70) },
              { name: "大豆", value: randomExtend(20, 30) },
              { name: "玉米", value: randomExtend(10, 50) },
              { name: "高粱", value: randomExtend(5, 20) },
              { name: "其他", value: randomExtend(40, 50) }
            ],
            insideLabel: {
              show: false
            },
            outsideLabel: {
              formatter: "{name} {percent}%",
              labelLineEndLength: 10,
              style: {
                fill: "#fff"
              },
              labelLineStyle: {
                stroke: "#fff"
              }
            },
            roseType: true
          }
        ],
        color: constants.colors
      };
    },
    randomExtend(minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10);
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      }
    }
  },
  mounted() {
    const { createData } = this;
    createData();
    setInterval(createData, 30000);
  }
};
</script>
<style lang="scss" scoped>
#rose-chart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  .dv-charts-container {
    height: calc(100% - 10px);
  }
}
</style>
