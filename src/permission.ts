import NProgress from "nprogress";
import { showNotify } from "vant";
import "nprogress/nprogress.css";
import router from "./router";
import { getLocal, getToken } from "@/utils/save";
const TITLE = "v3H5模板";
NProgress.configure({ showSpinner: false });
const getPageTitle = (key: unknown) => {
  const hasKey = `${key}`;
  if (hasKey) {
    const pageName = key ? `${key}` : "404";
    return `${pageName} - ${TITLE}`;
  }
  return `${TITLE}`;
};

const whiteList: string[] = ["/login"];

/* 权限设置 */
router.beforeEach((to: toRouteType, from, next) => {
  const getRole = getLocal("role") || "noAccess";
  const hasToken = getToken();
  // ! 权限
  NProgress.start();
  next();
  // if (whiteList.indexOf(to.path) !== -1) {
  //   next();
  // } else {
  //   if (hasToken) {
  //     if (to.meta.auth && to.meta.auth.indexOf(getRole) === -1) {
  //       next(from.path);
  //       showNotify({ type: "danger", message: "没有权限!" });
  //       NProgress.done();
  //     } else if (!to.meta.auth && to.name) {
  //       next();
  //     } else if (!to.name) {
  //       next(`/404?redirect=${to.path}`);
  //     } else {
  //       next();
  //     }
  //   } else if (!hasToken) {
  //     next(`/login`);
  //   }
  // }
});

router.afterEach(to => {
  NProgress.done();
  document.title = getPageTitle(to.meta.title);
});
