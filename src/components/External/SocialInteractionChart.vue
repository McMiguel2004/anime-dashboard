<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Interacción Social</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div class="chart bars-chart">
        <div v-for="(v,i) in data" :key="i" class="bar-item">
          <span class="bar-label">{{ v.label }}</span>
          <div class="bar-bg">
            <div class="bar-fill" :style="{ width: v.value + '%' }"></div>
          </div>
          <span class="bar-value">{{ v.value }}%</span>
        </div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const data = ref([
  { label: 'Likes', value: 60 },
  { label: 'Comentarios', value: 25 },
  { label: 'Compartidos', value: 15 },
]);
</script>

<style scoped>
.chart {
  width: 100%;
  height: 200px !important;
  overflow-y: auto;
  padding: 8px 0;
}
.bars-chart {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.bar-item {
  display: flex;
  align-items: center;
  gap: 8px;
}
.bar-label {
  flex: 1;
  white-space: nowrap;
}
.bar-bg {
  flex: 3;
  background: var(--ion-color-light);
  height: 12px;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}
.bar-fill {
  height: 100%;
  background: var(--ion-color-secondary);
  transition: width 0.6s ease;
}
.bar-value {
  width: 32px;
  text-align: right;
}
</style>
