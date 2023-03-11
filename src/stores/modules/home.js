import { defineStore } from "pinia";
import { getCategories, getHotSuggests, getHouseList } from "@/services";

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentPage: 1
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData() {
      const res = await getCategories()
      this.categories = res.data
    },
    async fetchHouseListData() {
      const res = await getHouseList(this.currentPage++)
      this.houseList.push(...res.data)
    }
  }
})

export default useHomeStore
