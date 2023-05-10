<script setup lang="ts">
  import HelloWorld from "@/components/HelloWorld.vue";
  import useRequest from "@/hooks/useRequest";
  /*详见:https://inhiblab-core.gitee.io/docs/hooks/useRequest/*/
  //  vuehooks plus

  function getUsername(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`${String(Date.now())}`);
      }, 300);
    });
  }

  const text = ref("");

  const { data, run } = useRequest(() => getUsername(), {
    debounceWait: 1000,
    manual: true
  });

  watch(text, c => {
    run();
  });
</script>

<template>
  <div>
    <h2>vue Hooks plus:</h2>
    <div style="margin-top: 16px"><input v-model="text" type="text" /></div>
    <div style="margin-top: 16px">value：{{ data }}</div>
    <h2>pinia:</h2>
    <HelloWorld />
  </div>
</template>

<style lang="scss" scoped></style>
