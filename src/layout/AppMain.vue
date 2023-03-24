<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="keepAliveList">
      <component :is="Component" :key="route.path" />
    </keep-alive>
  </router-view>
</template>

<script setup lang="ts">
import { routes } from '@/router'


const keepAliveList = computed(() => {
  return filterKeepAliveRoute(routes)
})


//  todo 过滤keepAlive路由
const filterKeepAliveRoute = (routes: Array<RouteConfigsTable>): Array<string> => {
  return ["HomePage"]
}

</script>

<style scoped></style>