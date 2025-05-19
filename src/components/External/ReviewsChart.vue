<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Valoración Media</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div class="chart">
        <svg viewBox="0 0 100 50" class="rev-svg">
          <path
            :d="arcPath"
            stroke="var(--ion-color-warning)"
            stroke-width="8"
            fill="none"
          />
          <text x="50" y="45" text-anchor="middle" class="rev-text">
            {{ rating }}/5
          </text>
        </svg>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const rating = ref(4.2);
const arcPath = computed(() => {
  const end = Math.PI * (1 + rating.value / 5);
  const x = 50 + 40 * Math.cos(end);
  const y = 50 + 40 * Math.sin(end);
  return `M10,50 A40,40 0 0,1 ${x},${y}`;
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 200px !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.rev-svg {
  width: 100%;
  height: 100%;
}
.rev-text {
  font-size: 1.2em;
  fill: var(--ion-color-dark);
}
</style>
