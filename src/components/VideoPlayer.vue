<template>
  <video id="video-player" ref="videoPlayer" class="video-js"></video>
</template>
<script>
import videojs from "video.js";
import "video.js/dist/alt/video-js-cdn.min.css";
export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      player: null
    };
  },
  mounted() {
    let options = Object.assign({}, { fluid: true }, this.options);
    this.player = videojs(this.$refs.videoPlayer, options, () => {
      console.log("onPlayerReady", this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
