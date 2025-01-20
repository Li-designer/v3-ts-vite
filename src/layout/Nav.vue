<script lang="ts" setup>
  import { emitter } from "@/utils/mitt";
  import { ComputedRef } from "vue";

  const route = useRoute();
  const title = ref<string>("");
  const onClickLeft = () => history.back();
  /* 是否显示左边箭头 */
  const isShowLeftArrow: ComputedRef = computed(() => {
    return route.meta.showLeftArrow;
  });
  /* 标题修改 */
  const pageTitle: ComputedRef = computed(() => {
    if (route.meta.cacheTitle) {
      const changeTitle = (val: string) => (title.value = val);
      emitter.on("changeTitle", changeTitle);
    } else {
      title.value = route.meta.title as string;
    }
    return title.value;
  });
</script>

<template>
  <van-nav-bar :left-arrow="isShowLeftArrow" :title="pageTitle" fixed @click-left="onClickLeft">
    <template #right>
      <slot name="right" />
    </template>
  </van-nav-bar>
</template>

<style scoped></style>
