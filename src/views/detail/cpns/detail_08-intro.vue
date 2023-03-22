<template>
  <div class="detail-price-intro">
    <h3 class="title">{{ introduction.title }}</h3>
    <div class="desc">{{ introduction.introduction }}</div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="">
      <span class="text">宏源旅途，永无止尽!</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  introduction: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style lang="less" scoped>
.detail-price-intro {
  border-top: 5px solid #f2f3f4;
  padding: 25px 15px 0;
  .title {
    font-size: 14px;
  }
  .desc {
    margin-top: 12px;
    font-size: 12px;
    color: #666;
    line-height: 1.5;
  }
  .footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    width: 100%;
    height: 110px;
    img {
      width: 128px;
    }
    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688A7;
    }
  }
}
</style>
