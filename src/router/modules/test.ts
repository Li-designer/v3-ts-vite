const LayOut = () => import("@/layout/index.vue");

const test = {
  path: "/test",
  name: "TestPage",
  component: LayOut,
  redirect: "/testPage",
  children: [
    {
      path: "/testPage",
      name: "TestPageOne",
      meta: {
        title: "测试主页",
        keepAlive: true
      },
      component: () => import("@/view/Test/index.vue")
    }
  ]
} as RouteConfigsTable;

export default test;
