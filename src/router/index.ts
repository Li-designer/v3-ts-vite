import { Router, createRouter, createWebHashHistory } from "vue-router";

const NotFound = () => import("@/layout/NotFound.vue");
const LayOut = () => import("@/layout/index.vue");

// 排除的文件 "!./modules/**/remaining.ts"
/* modules文件下的路由自动导入 */
const modules: Record<string, any> = import.meta.glob(["./modules/**/*.ts"], {
  eager: true
});
/**
 * @cacheTitle 是否为动态标题
 * @showLeftArrow 是否显示返回的左箭头
 * @keepAlive 是否缓存
 * @showNav 是否显示头部
 * @showTab 是否显示底部tab
 * @navClass 头部导航栏类名
 */
export const routes = [
  // 将匹配所有内容并将其放在 `route.params.pathMatch` 下
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  {
    path: "/",
    name: "Page",
    redirect: "/login",
    children: [
      {
        path: "/login",
        name: "Login",
        meta: { title: "登录" },
        component: () => import("@/view/login/index.vue")
      }
    ]
  },
  {
    path: "/home",
    name: "HomePage",
    component: LayOut,
    redirect: "/homePage",
    children: [
      {
        path: "/homePage",
        name: "OnePage",
        meta: {
          title: "主页",
          showLeftArrow: false,
          keepAlive: true,
          showNav: true,
          showTab: true,
          cacheTitle: false
        },
        component: () => import("@/view/Home/index.vue")
      }
    ]
  }
];

Object.keys(modules).forEach(key => {
  routes.push(modules[key].default);
});

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
