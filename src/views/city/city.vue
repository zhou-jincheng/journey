<template>
  <div class="city">
    <van-search
      v-model="searchText"
      placeholder="城市/区域/位置"
      shape="round"
      show-action
      @cancel="onCancel"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const searchText = ref('')

const router = useRouter()
function onCancel() {
  router.back()
}
</script>

<style lang="less" scoped>

</style>
