<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="keepAliveList">
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>
</template>

<script setup lang="ts">
import { routes } from "@/router";

const keepAliveList = computed(() => {
  return filterKeepAliveRoute(routes);
});

// 过滤keepAlive路由
const filterKeepAliveRoute = (routes: Array<RouteConfigsTable>) => {
  const result = routes.reduce((acc: any[], cur) => {
    if (cur.children && cur.children.some(child => child.meta && child.meta.keepAlive)) {
      acc.push(cur.name);
    }
    return acc;
  }, []);
  return result;
};
</script>

<style scoped></style>
