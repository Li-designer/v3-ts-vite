<script setup lang="ts">
import { userLogin } from "@/api/login";
import useInterval from "@/hooks/useInterval";
import useRequest from "@/hooks/useRequest";
const time = ref<string | Date>("");
let interval: { stop: Function };

const clickFunStop = () => {
  interval.stop();
  console.log(interval);
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
</script>

<template>
  <div>
    <h4>自定义hooks:useInterval</h4>
    <van-button plain type="primary" @click="clickFun">开始</van-button>
    <van-button plain type="primary" @click="clickFunStop">停止</van-button>
    <p>{{ time }}</p>
    <h4>自定义hooks:useRequest</h4>
    <van-button plain type="primary" @click="clickFunRe">发送测试</van-button>
  </div>
</template>

<style lang="scss" scoped></style>
