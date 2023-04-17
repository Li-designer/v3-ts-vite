<script setup lang="ts">
  import { userLogin } from "@/api/login";
  import useInterval from "@/hooks/useInterval";
  import useRequest from "@/hooks/useRequest";
  import useDayjs from "@/hooks/useDayjs";
  import { showToast } from "vant";
  import { emitter } from "@/utils/mitt";
  const time = ref<string | Date>("");
  const shallowValue = shallowRef({ count: 1 });
  const currentRoute = useRoute();
  const editTitle = () => {
    // console.log(route, "route");
    // if (!route.meta.cacheTitle) return showToast("请设置为动态标题!");
    // route.meta.cacheTitle为true时可修改标题,为false显示meta.title
    // appContext.config.globalProperties.$bus.emit("changeTitle", "修改标题");

    if (!unref(currentRoute.meta)?.cacheTitle) {
      return showToast("请设置为动态标题!");
    }
    emitter.emit("changeTitle", "修改标题");
  };
  let interval: { stop: Function };
  const clickFunStop = () => {
    interval.stop();
    time.value = "";
  };

  const clickFun = () => {
    interval = useInterval(() => {
      time.value = new Date();
    }, 1000);
  };
  const clickFunRe = () => {
    const res = useRequest(userLogin, { username: "lj", password: 1111 });
    console.log(res);
  };
  const clickFix = () => {
    shallowValue.value.count = 2;
  };
  const clickFixObj = () => {
    shallowValue.value = {
      count: 5
    };
  };
  const changeTime = (type: string, time: Date | string | number) => {
    const { timeFormatValue } = useDayjs(type, time);
    console.log(timeFormatValue, type, time);
  };
</script>

<template>
  <div class="homePage">
    <div class="module">
      <h4>自定义hooks:useInterval</h4>
      <van-button plain type="primary" @click="clickFun">开始</van-button>
      <van-button plain type="primary" @click="clickFunStop">停止</van-button>
      <p>{{ time }}</p>
    </div>
    <div class="module">
      <h4>自定义hooks:useRequest</h4>
      <van-button plain type="primary" @click="clickFunRe">发送测试</van-button>
    </div>
    <div class="module">
      <h4>shallowRef:{{ shallowValue }}</h4>
      <van-button plain type="primary" @click="clickFix">修改count</van-button>
      <van-button plain type="primary" @click="clickFixObj">修改OBJ</van-button>
    </div>
    <div class="module">
      <h4>修改标题</h4>
      <van-button plain type="primary" @click="editTitle">修改</van-button>
    </div>
    <div class="module">
      <h4>时间转换</h4>
      <van-button plain type="primary" @click="changeTime('valueOf', '2019-01-25')">转换为时间戳13位</van-button>
      <van-button plain type="primary" @click="changeTime('format', 1548345600000)">时间戳转换成字符串</van-button>
      <van-button plain type="primary" @click="changeTime('unix', '2019-01-25')">转换成时间戳10位</van-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .homePage {
    padding: 10px;
    padding-bottom: 100px;
    .module {
      width: 100%;
      min-height: 270px;
      padding: 10px;
      background-color: #fff;
      border-radius: 20px;
      margin-bottom: 20px;
      h4 {
        margin-bottom: 20px;
      }
    }
  }
</style>
