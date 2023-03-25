import { Router, createRouter, createWebHashHistory } from "vue-router";

const NotFound = () => import("@/layout/NotFound.vue");
const LayOut = () => import("@/layout/index.vue");

export const routes = [
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  { path: "/", name: "Home", redirect: "/home" },
  {
    path: "/home",
    name: "HomePage",
    component: LayOut,
    redirect: "/homePage",
    children: [
      {
        path: "/homePage",
        name: "OnePage",
        meta: { title: "主页" },
        component: () => import("@/view/Home/index.vue")
      }
    ]
  }
];

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;
