<script setup lang="ts">
  import { routes } from "@/router";

  const keepAliveList = computed(() => {
    return filterKeepAliveRoute(routes);
  });
  /**
   * 需要缓存的页面要加上
   * defineOptions({
   * name: "XXXX"
   *   });
   */
  // 过滤keepAlive路由
  const filterKeepAliveRoute = (routes: any) => {
    return routes.reduce((acc: any[], cur: { children: any[]; name: any }) => {
      if (cur.children && cur.children.some((child: { meta: { keepAlive: any } }) => child.meta && child.meta.keepAlive)) {
        cur.children
          .filter(item => item.meta.keepAlive)
          .map(el => {
            acc.push(el.name);
          });
      }
      return acc;
    }, []);
  };
</script>
<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="keepAliveList">
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>
</template>

<style scoped></style>
