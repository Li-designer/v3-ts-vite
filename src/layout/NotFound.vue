<script setup lang="ts">
  import router from "@/router";

  defineOptions({
    name: "NotFound"
  });
  const goBack = () => {
    router.replace("/home");
  };
</script>
<template>
  <div class="four">
    <img src="~@/assets/404.png" alt="" class="icon" />
    <span class="backHome" @click="goBack">返回首页<van-icon name="share-o" /></span>
  </div>
</template>

<style lang="scss" scoped>
  .four {
    @include fh();
    flex-direction: column;
    @include wh(100%, 100%);
    padding-top: 20%;
    .icon {
      @include wh(500px, 500px);
    }
    .backHome {
      font-size: 32px;
      color: #3f86f6;
    }
  }
</style>
