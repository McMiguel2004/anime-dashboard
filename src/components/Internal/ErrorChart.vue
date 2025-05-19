<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Radar de Severidad de Errores</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ApexChart
        ref="chartRef"
        type="radar"
        :options="opts"
        :series="series"
        :width="'100%'"
        :height="300"
      />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted } from 'vue'
import ApexChart from 'vue3-apexcharts'

const chartRef = ref<any>(null)

// Opciones para radar chart
const opts = ref({
  chart: {
    toolbar: { show: false },
    animations: { enabled: true },
    dropShadow: { enabled: true, blur: 1, left: 1, top: 1, opacity: 0.2 },
    redrawOnParentResize: true,
    parentHeightOffset: 0
  },
  legend: { position: 'top' },
  stroke: { width: 2 },
  markers: { size: 4 },
  plotOptions: {
    radar: {
      size: 140,
      polygons: {
        strokeColors: '#e9e9e9',
        fill: { colors: ['#f8f8f8', '#fff'] }
      }
    }
  },
  yaxis: {
    show: true,
    min: 0,
    max: 100,
    tickAmount: 4
  },
  xaxis: {
    categories: ['Network', 'UI', 'Server', 'Database', 'Other']
  },
  responsive: [{
    breakpoint: 600,
    options: { chart: { width: '100%' } }
  }]
})

// Series de datos de severidad (%)
const series = ref([
  {
    name: 'Severidad (%)',
    data: [60, 75, 45, 50, 30]
  }
])

onMounted(async () => {
  await nextTick()
  // Forzar renderizado y resize inicial
  chartRef.value?.chart?.render()
  window.dispatchEvent(new Event('resize'))
})
</script>

<style scoped>
/* Ajustes mínimos; ApexCharts gestiona el radar */
</style>