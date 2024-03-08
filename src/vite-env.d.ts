/// <reference types="vite/client" />
/// <reference types="vconsole" />
declare module "dplayer";
declare module "video.js";
// 解决无法找到模块“./App.vue”的声明文件
declare module "*.vue" {
  import { defineComponent } from "vue";
  const Component: ReturnType<typeof defineComponent>;
  export default Component;
}
