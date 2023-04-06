<script setup lang="ts">
import { userLogin } from "@/api/login";
import useInterval from "@/hooks/useInterval";
import useRequest from "@/hooks/useRequest";
const time = ref<string | Date>("");

const shallowValue = shallowRef({ count: 1 });

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
