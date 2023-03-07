<template>
  <div class="home-item">
    <div class="inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="desc">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="detail">
          <van-rate
            :model-value="itemScore"
            :size="15"
            color="#fff"
            allow-half
            readonly
          />
          <div class="price">￥{{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({})
  }
})

const itemScore = computed(() => {
  return parseFloat(props.itemData.commentScore)
})
</script>

<style lang="less" scoped>
.home-item {
  width: 50%;
  margin: 10px 0;
  padding: 0 5px;
  box-sizing: border-box;
  .inner {
    position: relative;
    color: #fff;
    border-radius: 6px;
    overflow: hidden;
    .cover {
      img {
        width: 100%;
      };
    }

    .desc {
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 10px;
      .summary {
        font-size: 12px;
      }
      .name {
        margin: 5px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .detail {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .price {
          transform: translateY(1px);
        }
      }
    }
  }
}
</style>
