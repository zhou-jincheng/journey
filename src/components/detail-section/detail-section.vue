<template>
  <div class="detail-section">
    <div class="header">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot>
        这是默认内容
      </slot>
    </div>
    <div v-if="moreText" class="footer">
      <div class="more">
        <span class="more">{{ moreText }}</span>
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: "默认标题"
  },
  moreText: {
    type: String,
    default: ""
  }
})
</script>

<style lang="less" scoped>
.detail-section {
  padding: 0 15px;
  margin-top: 12px;
  border-top: 5px solid #f2f3f4;
  background-color: #fff;

  .header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;

    .title {
      font-size: 20px;
      color: #333;
    }
  }

  .content {
    padding: 8px 0;
  }

  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 44px;
    line-height: 44px;
    color: #ff9645;
    font-size: 14px;
    font-weight: 600;
  }
}
</style>
