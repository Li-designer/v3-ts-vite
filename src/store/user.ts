import { cleanLocalStorage, getLocal, getToken, readFromLocalStorage, removeToken } from "@/utils/save";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      token: "" || getToken(),
      roleArr: [] || readFromLocalStorage("role"),
      role: "Admin" || getLocal("role"), //当前角色默认Admin
      username: "lj"
    };
  },
  getters: {
    // 自动推断类型
    getRoleArr(state) {
      return state.roleArr;
    },
    getRole(state) {
      return state.role;
    },
    getToken(state) {
      return state.token;
    },
    getUsername(state) {
      return state.username;
    }
  },
  actions: {
    /**
     * @description 退出登录
     */
    logout() {
      this.token = "";
      this.roleArr = [];
      this.role = "";
      removeToken();
      cleanLocalStorage("roleArr");
    }
  }
});
