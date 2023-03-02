import { defineStore } from 'pinia'

const useCityStore = defineStore('city', {
  state: () => ({
    citys: [],
    count: 100
  }),
  getters: {},
  actions: {}
})

export default useCityStore
