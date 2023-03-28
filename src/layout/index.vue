<template>
  <div class="app-contian">
    <NavBar />
    <AppMain />
    <TabBar />
  </div>
</template>

<script setup lang="ts">
import AppMain from "./AppMain.vue";
import TabBar from "./TabBar.vue";
import NavBar from "./Nav.vue";
</script>

<style lang="scss" scoped>
.app-contian {
  padding-top: 92px;
}
</style>
