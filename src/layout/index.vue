<script setup lang="ts">
  import AppMain from "./AppMain.vue";
  import TabBar from "./TabBar.vue";
  import NavBar from "./Nav.vue";
  const route = useRoute();
  const isShowNav: ComputedRef = computed(() => {
    return route.meta.showNav;
  });

  const isShowTab: ComputedRef = computed(() => {
    return route.meta.showTab;
  });
</script>

<template>
  <div class="app-contian">
    <NavBar v-if="isShowNav" />
    <AppMain />
    <TabBar v-if="isShowTab" />
  </div>
</template>

<style lang="scss" scoped>
  .app-contian {
    padding-top: 92px;
  }
</style>
