const BusPlugin: any = {
  install: (app: any, options: any) => {
    // 注入一个全局可用的  方法
    // app.config.globalProperties.$bus = Bus;
  }
};
export default BusPlugin;
