import { getCategories, getHotSuggests } from "@/services";
import { defineStore } from "pinia";

const useHomeStore = defineStore('home', {
  state: () => ({
    hotSuggests: [],
    categories: []
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData() {
      const res = await getCategories()
      this.categories = res.data
    }
  }
})

export default useHomeStore
