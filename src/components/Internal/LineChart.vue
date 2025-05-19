<template>
  <ion-card>
    <ion-card-header><ion-card-title>Usuarios Activos</ion-card-title></ion-card-header>
    <ion-card-content>
      <canvas ref="canvas" class="chart"></canvas>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const canvas = ref<HTMLCanvasElement|null>(null);
onMounted(() => {
  if (!canvas.value) return;
  new Chart(canvas.value, {
    type: 'line',
    data: { labels:['Ene','Feb','Mar','Abr','May'], datasets:[{
      label:'Usuarios Activos',
      data:[120,150,180,200,230],
      borderColor:'var(--ion-color-primary)',
      backgroundColor:'rgba(54,162,235,0.2)',
      fill:true,
    }]},
    options:{
      responsive:true,
      maintainAspectRatio:false,
      scales:{ y:{ beginAtZero:true } }
    }
  });
});
</script>
<style scoped>
.chart { width:100%; height:200px !important; }
</style>
