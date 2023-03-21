<template>
  <div class="detail-map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div ref="mapRef" class="map"></div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from '@/components/detail-section/detail-section.vue'
import { ref, onMounted } from 'vue';

const props = defineProps({
  position: {
    type: Object,
    default: () => ({})
  }
})

const mapRef = ref(null)
onMounted(() => {
  var map = new BMapGL.Map(mapRef.value);
  var point = new BMapGL.Point(props.position.longitude, props.position.latitude);
  map.centerAndZoom(point, 15);
  var marker = new BMapGL.Marker(point);
  map.addOverlay(marker);
})

</script>

<style lang="less" scoped>
.detail-map {
  .map {
    height: 250px;
  }
}
</style>
