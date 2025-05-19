<template>
  <ion-card>
    <ion-card-header><ion-card-title>Usuarios en Línea (RT)</ion-card-title></ion-card-header>
    <ion-card-content>
      <canvas ref="canvas" class="chart"></canvas>
    </ion-card-content>
  </ion-card>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables, type ChartData } from 'chart.js';
Chart.register(...registerables);
const canvas = ref<HTMLCanvasElement|null>(null);
onMounted(() => {
  if(!canvas.value) return;
  const c = new Chart(canvas.value,{
    type:'line',
    data:{ labels:[] as string[], datasets:[{ label:'Online', data:[] as number[], borderColor:'purple', fill:false }] } as ChartData<'line'>,
    options:{ responsive:true, maintainAspectRatio:false, animation:false }
  });
  setInterval(()=>{
    const t=new Date().toLocaleTimeString();
    if(c.data.labels && c.data.datasets[0].data){
      c.data.labels.push(t);
      c.data.datasets[0].data.push(Math.floor(Math.random()*20+5));
      if(c.data.labels.length>10){
        c.data.labels.shift();c.data.datasets[0].data.shift();
      }
      c.update();
    }
  },2000);
});
</script>
<style scoped>
.chart{width:100%;height:200px!important;}
</style>
