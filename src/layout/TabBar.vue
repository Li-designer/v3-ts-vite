<script setup lang="ts">
  const active = ref(0);
</script>
<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" to="/home"> 主页 </van-tabbar-item>
      <van-tabbar-item icon="bulb-o" to="/test">测试页</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped></style>
