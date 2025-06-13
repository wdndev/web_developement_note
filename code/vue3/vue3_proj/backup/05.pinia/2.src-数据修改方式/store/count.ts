import {  defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  // 真正存储数据的地方
  state: () => ({
    sum: 0,
    school: "neu",
    address: "shenyang"
  }),
  getters: {
    double: (state) => state.sum * 2
  },
  // 放置方法，用于相应组件中的动作
  actions: { 
    increment(value) {
        if (this.sum < 10) {
            this.sum += value
        }
      
    }
  }
})