import { showLoadingToast } from "vant";

export default async function useRequest(apiRequest: Function, data?: Object) {
  const load = showLoadingToast({
    message: "加载中...",
    forbidClick: true,
    loadingType: "spinner"
  });
  try {
    const res = await apiRequest({ ...data });
    return res;
  } catch (e) {
    throw e;
  } finally {
    await load; // 等待loading的Promise解决
    load.close();
  }
}
