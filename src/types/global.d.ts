import { type RouteComponent, type RouteLocationNormalized } from "vue-router";

/**
 * 全局类型声明，无需引入直接在 `.vue` 、`.ts` 、`.tsx` 文件使用即可获得类型提示
 */
declare global {
  interface toRouteType extends RouteLocationNormalized {
    meta: {
      auth?: Array<string>;
      keepAlive?: boolean;
      /* tabBar自定义样式 */
      navClass?: string;
      /* 动态头部导航栏标题 */
      cacheTitle?: string;
    };
  }

  /**
   * @description 整体路由配置表（包括完整子路由）
   */
  interface RouteConfigsTable {
    /** 路由地址 `必填` */
    path: string;
    /** 路由名字（保持唯一）`可选` */
    name?: string;
    /** `Layout`组件 `可选` */
    component?: RouteComponent;
    /** 路由重定向 `可选` */
    redirect?: string;
    meta?: {
      /** 菜单名称 `必填` */
      title: string;
      /* 是否缓存页面 */
      keepAlive?: Boolean;
      /* 角色权限 */
      auth?: Array<string>;
      /* tabBar自定义样式 */
      navClass?: string;
      /* 动态头部导航栏标题 */
      cacheTitle?: string;
    };
    /** 子路由配置项 */
    children?: Array<RouteConfigsTable>;
  }
}
