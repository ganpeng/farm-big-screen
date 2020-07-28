<template>
  <div v-if="visible" class="video-player-dialog-container border-icon16">
    <video id="dialog-video-player" ref="videoPlayer" class="video-js"></video>
    <span @click="hide" class="video-player-close-btn">
      <svg-icon icon-class="video_dialog_close_btn"></svg-icon>
    </span>
  </div>
</template>
<script>
import videojs from "video.js";
import "video.js/dist/alt/video-js-cdn.min.css";
export default {
  name: "VideoPlayerDialog",
  props: {
    options: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      visible: false,
      player: null
    };
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    async init() {
      try {
        await this.$nextTick();
        let options = Object.assign({}, { fluid: true }, this.options);
        this.player = videojs(this.$refs.videoPlayer, options, () => {
          console.log("onPlayerReady", this);
        });
      } catch (err) {
        console.log(err);
      }
    },
    show() {
      this.visible = true;
      this.init();
    },
    hide() {
      this.visible = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.video-player-dialog-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40.1098%;
  height: 52.6089%;
  padding: 2.8% 2% 0.8% 2%;
  .video-player-close-btn {
    position: absolute;
    top: 0;
    right: 22px;
    cursor: pointer;
    .svg-icon {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
