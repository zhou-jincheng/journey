<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabBar"/>
    <loading v-if="mainStore.loading" />
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main.js'
import TabBar from '@/components/tab-bar/tab-bar.vue'
import Loading from '@/components/loading/loading.vue'
import { useRoute } from 'vue-router';

// 控制底部tabbar栏显示
const route = useRoute()

// 控制loading显示
const mainStore = useMainStore()

</script>

<style scoped>
</style>
