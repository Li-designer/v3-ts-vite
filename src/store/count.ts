
export const useCounterStore = defineStore('counter', {
  state: () => { return { count: 0 } },
  getters: {
    // 自动推断类型
    double(state) { return state.count * 2 },

    // 返回类型需设置
    doublePlusOne(): number {
      return this.count * 2 + 1
    },
  },
  actions: {
    increment() {
      this.count++
    },
  },
})