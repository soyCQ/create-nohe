import { defineStore } from 'pinia'

export const useMain = defineStore('Main', {
  state: () => ({
    "msg": "NoheJS + Vue",
    "count": 0
  }),
  getters: {
  },
  actions: {
  }
})