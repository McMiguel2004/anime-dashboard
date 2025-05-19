<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Tiempo Medio de Carga</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <div class="chart">
        <ApexChart
          ref="chartRef"
          type="bar"
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

// Opciones del gráfico
const opts = ref({
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    animations: { enabled: true },
    redrawOnParentResize: true,
    parentHeightOffset: 0
  },
  title: { text: 'Tiempo Medio de Carga (ms)', align: 'center' },
  plotOptions: { bar: { columnWidth: '50%', borderRadius: 4 } },
  xaxis: { categories: ['Ene','Feb','Mar','Abr','May'], labels: { rotate: -45 } },
  yaxis: { title: { text: 'ms' }, min: 0 },
  dataLabels: { enabled: false },
  colors: ['var(--ion-color-warning)'],
  responsive: [{ breakpoint: 600, options: { chart: { height: 250 } } }]
})

// Datos de la serie
const series = ref([{ name: 'Tiempo de Carga', data: [800, 1200, 700, 950, 1100] }])

onMounted(async () => {
  // Esperar al render inicial
  await nextTick()
  // Forzar renderizado/reflow del chart
  if (chartRef.value?.chart) {
    chartRef.value.chart.render()
  }
  // Pequeño resize para seguridad
  window.dispatchEvent(new Event('resize'))
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 200px !important;
}
</style>