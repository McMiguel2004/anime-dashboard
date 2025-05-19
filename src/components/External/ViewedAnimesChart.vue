<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Series Completadas (Radar 12 meses 2024)</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <v-chart
        :option="opt"
        style="width: 100%; height: 300px;"
        autoresize
      />
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import { CanvasRenderer } from 'echarts/renderers'
import { RadarChart } from 'echarts/charts'
import { TooltipComponent, LegendComponent } from 'echarts/components'

use([CanvasRenderer, RadarChart, TooltipComponent, LegendComponent])

// Array de meses del 2024
const months = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
]

const opt = ref({
  tooltip: {
    trigger: 'item',
    backgroundColor: 'rgba(0,0,0,0.7)',  // Fondo oscuro para resaltar
    borderRadius: 8,
    padding: [10, 15],
    textStyle: {
      color: '#fff',  // Texto blanco para un mejor contraste
    },
    formatter: function (params: any) {
      // Mostrar los meses correspondientes en el tooltip
      const month = params.name;  // Mes al que corresponde
      const value = params.data.value;  // Datos correspondientes
      return `<strong>${month}</strong><br/>Series Completadas: ${value}`;
    }
  },
  radar: {
    indicator: months.map(m => ({ name: m, max: 5 })), // Los meses como nombres de los indicadores
    radius: '60%',  // Reducir el tamaño del radar para dar espacio a los meses
    splitNumber: 5,
    shape: 'circle',
    splitArea: {
      areaStyle: {
        color: ['#f5f5f5', '#e0e0e0', '#f5f5f5', '#e0e0e0', '#f5f5f5']
      }
    },
    axisName: {
      color: '#333',
      fontSize: 10,
      padding: [10, 5]
    },
    axisLabel: {
      show: true,
      textStyle: {
        fontSize: 10,
        color: '#000'
      },
      rotate: 45  // Ajuste del ángulo para los nombres
    }
  },
  series: [{
    name: 'Series Completadas',
    type: 'radar',
    lineStyle: {
      width: 2,
      color: 'var(--ion-color-primary)'  // Color de la línea
    },
    areaStyle: {
      color: 'rgba(0, 123, 255, 0.3)'  // Color de la zona del área
    },
    symbol: 'circle',
    symbolSize: 5,
    data: [
      {
        value: Array.from({ length: 12 }, () => Math.floor(Math.random() * 5 + 1)),  // 12 meses
        name: 'Series Completadas'
      }
    ]
  }]
})
</script>

<style scoped>
/* El tamaño ya está controlado por el estilo inline */
</style>
