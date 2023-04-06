<script setup lang="ts">
const route = useRoute();
const title = ref<string>("");
const onClickLeft = () => history.back();
const { appContext } = getCurrentInstance();
/* 是否显示左边箭头 */
const isShowLeftArrow: ComputedRef = computed(() => {
  return route.meta.showLeftArrow || true;
});
/* 标题修改 */
const pageTitle: ComputedRef = computed(() => {
  if (route.meta.cacheTitle) {
    appContext.config.globalProperties.$bus.on("changeTitle", (val: string) => {
      title.value = val;
    });
  } else {
    title.value = route.meta.title as string;
  }
  return title.value;
});
</script>

<template>
  <van-nav-bar :left-arrow="isShowLeftArrow" :title="pageTitle" @click-left="onClickLeft" fixed>
    <template #right>
      <slot name="right" />
    </template>
  </van-nav-bar>
</template>

<style scoped></style>
