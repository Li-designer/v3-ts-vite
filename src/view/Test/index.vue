<script setup lang="ts">
  import HelloWorld from "@/components/HelloWorld.vue";
  import useRequest from "@/hooks/useRequest";
  import DPlayer from "dplayer";

  import video from "./v0200fg10000ckfvqabc77u7ntrorndg.mp4";
  // import videojs from "video.js";
  /*详见:https://inhiblab-core.gitee.io/docs/hooks/useRequest/*/
  //  vuehooks plus

  // function getUsername(): Promise<string> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(`${String(Date.now())}`);
  //     }, 300);
  //   });
  // }

  // const text = ref("");

  // const { data, run } = useRequest(() => getUsername(), {
  //   debounceWait: 1000,
  //   manual: true
  // });

  // watch(text, c => {
  //   run();
  // });
  // const player = ref(null);
  // onMounted(() => {
  //   const dp = new DPlayer({
  //     container: document.getElementById("dplayer"),
  //     volume: 0.7,
  //     lang: "zh-cn",
  //     video: {
  //       url: video
  //     }
  //   });
  //   videoFun();
  // });
  // const videoFun = () => {
  //   // const dom = document.getElementById("video");
  //   // if (dom) {
  //   //   dom.setAttribute("muted", "true");
  //   //   dom.setAttribute("muted", "false");
  //   // }
  //   // console.log(video.value, "video");
  //   // nextTick(() => {
  //   const options = {
  //     language: "zh-CN", // 设置语言
  //     controls: true, // 是否显示控制条
  //     preload: "auto", // 预加载
  //     autoplay: false, // 是否自动播放
  //     fluid: false, // 自适应宽高
  //     src: video, // 要嵌入的视频源的源 URL
  //     muted: false,
  //     volume1: 1,
  //     objectFit: "cover", // 同css object-fit，作用于video标签
  //     notSupportedMessage: "此视频暂无法播放，请稍后再试" //允许覆盖Video.js无法播放媒体源时显示的默认信息。
  //   };
  //   const dom = document.getElementById("videoPlayer");
  //   player.value = videojs(dom, options, () => {
  //     console.log("初始化成功");
  //   });
  // });
  // };
</script>

<template>
  <div>
    <!-- <video id="videoPlayer" controls class="viewVideo video-js" data-setup="{}" />
    <video class="video-js" data-setup="{}">
      <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
      <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm" />
    </video> -->
    <!-- <h2>vue Hooks plus:</h2>
    <div style="margin-top: 16px"><input v-model="text" type="text" /></div>
    <div style="margin-top: 16px">value：{{ data }}</div>
    <h2>pinia:</h2>
    <HelloWorld /> -->
    <p>未压缩:</p>
    <div id="dplayer">
      <video
        id="video"
        x5-video-player-type="h5"
        webkit-playsinline="true"
        playsinline="true"
        class="viewVideo"
        width="400"
        height="400"
        controls
        loop
        :muted="false"
      >
        <source :src="video" />
      </video>
    </div>
</template>

<style lang="scss" scoped>
  #dplayer {
  }
</style>
