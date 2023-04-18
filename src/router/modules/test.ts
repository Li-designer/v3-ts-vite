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
        title: "store/vueHooksPlus",
        showTab: false,
        showNav: true,
        auth: []
      },
      component: () => import("@/view/Test/index.vue")
    }
  ]
} as RouteConfigsTable;

export default test;
