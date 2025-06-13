import {  defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  // 放置方法，用于相应组件中的动作
  actions: { 
    increment(value: number) {
        if (this.sum < 10) {
            this.sum += value
        }
      
    }
  },
  // 真正存储数据的地方
  state: () => ({
    sum: 0,
    school: "neu",
    address: "shenyang"
  }),
  getters: {
    bigSum: (state) => state.sum * 10,
    upperSchool: (state) => state.school.toUpperCase()
  }
})