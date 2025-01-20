import Cookies from "js-cookie";
// 业务需要在前端进行数据的缓存，到期就删除再进行获取新数据。
// Cookies.set('name', 'value', { expires: 7 }); // 7 天后失效
// 1、当数据较大时，可以利用localstorage，存数据时候写入一个时间，获取的时候再与当前时间进行比较
// 2、如果数据不超过cookie的限制大小，可以利用cookie比较方便，直接设置有效期即可。
const TOKEN_KEY = "accessToken";

export const getToken = () => Cookies.get(TOKEN_KEY);
export const setToken = (token: string) => Cookies.set(TOKEN_KEY, token);
export const removeToken = () => Cookies.remove(TOKEN_KEY);

export const saveLocal = ({ name, content }: SaveToLocalParams) => window.localStorage.setItem(name, content);
export const getLocal = (name: string) => window.localStorage.getItem(name);

export const saveToLocalStorage = ({ name, content }: SaveToLocalStorageParams) =>
  window.localStorage.setItem(name, JSON.stringify(content));

export const readFromLocalStorage = (name: string) => {
  if (name) {
    const formObj = window.localStorage.getItem(name) as string;
    return JSON.parse(formObj);
  }
};
export const cleanLocalStorage = (name: string) => window.localStorage.removeItem(name);
