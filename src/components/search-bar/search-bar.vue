<template>
  <div class="search-bar">
    <div class="inner">
      <div class="select-time">
        <div class="item start">
          <span class="text">住</span>
          <span class="date">03.09</span>
        </div>
        <div class="item end">
          <span class="text">离</span>
          <span class="date">03.10</span>
        </div>
      </div>
      <div class="content">
        <div class="keyword">关键字/位置/民宿</div>
        <i class="icon-search"></i>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
  .inner {
    display: flex;
    align-items: center;
    height: 100%;
    border-radius: 4px;
    background-color: #f2f4f6;
    font-size: 12px;
    .select-time {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      border-right: 1px solid #fff;
      .item {
        padding: 1px 0;
      }
      .end {
        position: relative;
        &::after {
          content: '';
          position: absolute;
          bottom: -1px;
          right: -12px;
          width: 0;
          height: 0;
          border: 4px solid transparent;
          border-left-color: #666;
          border-radius: 3px;
          transform: rotate(45deg);
        }
      }
      .text {
        color: #999;
        margin-right: 4px;
      }
      .date {
        color: #333;
      }
    }
    .content {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999;
      padding: 0 8px;
      .icon-search {
        width: 24px;
        height: 24px;

        background-image: url('@/assets/img/home/home-sprite.png');
        background-position: -29px -151px;
        background-size: 207px 192px;
      }
    }
  }
}
</style>
