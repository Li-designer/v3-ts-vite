<script setup lang="ts">
  import { useUserStore } from "@/store/user";
  import router from "@/router";

  defineProps<{ msg?: string }>();
  const store = useUserStore();
  const getLayOut = () => {
    store.logout();
    router.replace("/login");
  };
</script>

<template>
  <van-button type="primary" @click="getLayOut">退出登录</van-button>
  <p>getters:{{ store.getUsername }}</p>
</template>

<style lang="scss" scoped>
  .read-the-docs {
    color: #888;
  }

  .box {
    background-color: skyblue;
  }
</style>
