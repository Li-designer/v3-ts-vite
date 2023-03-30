import NProgress from "nprogress";
import "nprogress/nprogress.css";
import router from "./router";
const TITLE = "v3H5模板";

declare const module: any;

const getPageTitle = (key: unknown) => {
  const hasKey = `${key}`;
  if (hasKey) {
    const pageName = key ? `${key}` : "404";
    return `${pageName} - ${TITLE}`;
  }
  return `${TITLE}`;
};

// const whiteList: string[] = ["/login", "/home/page"];

/* 权限设置 */
router.beforeEach(async (to, from, next) => {
  // const getRole = readLocal("roleCode");
  // const hasToken = getToken();
  // ! 权限
  NProgress.start();
  next();
  /*   if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    if (hasToken) {
      if (to.meta.auth && to.meta.auth.indexOf(getRole) === -1) {
        next(from.path);
        Notify({ type: "danger", message: "没有权限!" });
        NProgress.done();
      } else if (!to.meta.auth && to.name) {
        next();
      } else if (!to.name) {
        next(`/404?redirect=${to.path}`);
      } else {
        next();
      }
    } else if (!hasToken) {
      next(`/login`);
      NProgress.done();
    }
  } */
});

router.afterEach(to => {
  NProgress.done();
  document.title = getPageTitle(to.meta.title);
});
