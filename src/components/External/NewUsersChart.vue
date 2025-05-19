<template>
  <ion-card>
    <ion-card-header><ion-card-title>Nuevos Registros</ion-card-title></ion-card-header>
    <ion-card-content>
      <canvas ref="canvas" class="chart"></canvas>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const canvas=ref<HTMLCanvasElement|null>(null);
onMounted(()=>{
  if(!canvas.value) return;
  new Chart(canvas.value,{
    type:'line',
    data:{ labels:['S1','S2','S3','S4'], datasets:[{ label:'Registros', data:[40,55,70,90], borderColor:'var(--ion-color-success)', fill:false }] },
    options:{ responsive:true, maintainAspectRatio:false }
  });
});
</script>
<style scoped>.chart{width:100%;height:200px!important;}</style>
