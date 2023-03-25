<script setup lang="ts">
import { useCounterStore } from "@/store/count";

defineProps<{ msg: string }>();

const count = ref(0);
const arr = reactive([1, 2, 3]);
const store = useCounterStore();
const plusNum = () => {
  store.increment();
};
</script>

<template>
  <van-button type="primary" @click="plusNum">使用store</van-button>
  <p>getters:{{ store.double }}</p>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}

.box {
  background-color: skyblue;
}
</style>
