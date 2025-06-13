import {  defineStore } from 'pinia'

export const useCountStore = defineStore('count', {
  // 真正存储数据的地方
  state: () => ({
    sum: 0
  }),
  getters: {
    double: (state) => state.sum * 2
  }
})