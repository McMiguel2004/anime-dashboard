<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Popularidad de Géneros</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div class="chart">
        <ApexChart
          ref="chartRef"
          type="pie"
          :options="opts"
          :series="series"
          :height="200"
          :width="'100%'"
        />
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted } from 'vue'
import ApexChart from 'vue3-apexcharts'

// Referencia al componente ApexChart
const chartRef = ref<any>(null)

// Opciones del pie chart
const opts = ref({
  chart: {
    animations: { enabled: true },
    redrawOnParentResize: true,
    parentHeightOffset: 0
  },
  labels: ['Shōnen','Shōjo','Seinen','Isekai','Mecha'],
  legend: { position: 'bottom' },
  grid: { padding: { top: 0, right: 0, bottom: 0, left: 0 } },
  responsive: [{
    breakpoint: 600,
    options: { chart: { height: 200 } }
  }]
})

// Datos de la serie
const series = ref([45,25,15,10,5])

onMounted(async () => {
  // Esperar a que Vue pinte el DOM
  await nextTick()

  // Forzar el primer render y un pequeño resize para seguridad
  chartRef.value?.chart?.render()
  window.dispatchEvent(new Event('resize'))
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 200px !important;
}
</style>
