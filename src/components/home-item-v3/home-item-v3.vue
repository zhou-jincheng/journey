<template>
  <div class="home-item">
    <div class="inner">
      <div class="cover">
        <img :src="itemData.image.url" alt="">
      </div>
      <div class="desc">
        <div class="location">
          <img src="@/assets/img/home/location.png" alt="">
          <span>{{ itemData.location }}</span>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="detail">
          <div class="final-price">￥{{ itemData.finalPrice }}</div>
          <div class="product-price">￥{{ itemData.productPrice }}</div>
          <div class="price-tip">{{ itemData.priceTipBadge.text }}</div>
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
    height: 100%;
    position: relative;
    color: #333;
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
      bottom: 9px;
      .location,
      .summary  {
        color: #666;
        font-size: 12px;
        img {
          width: 12px;
        }
      }
      .name {
        margin: 5px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .detail {
        margin-top: 8px;
        margin-left: -2px;
        display: flex;
        .final-price {
          color: var(--primary-color);
        }
        .product-price {
          margin: 0 2px;
          color: #999;
          font-size: 12px;
          text-decoration: line-through;
        }
        .price-tip {
          line-height: 14px;
          padding: 0 6px;
          font-size: 12px;
          color: #fff;
          background-image: linear-gradient(-90deg, #f66, #ff9f9f);
          border-radius: 7px;
        }
      }
    }
  }
}
</style>
