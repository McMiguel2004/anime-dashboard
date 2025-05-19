<template>
  <ion-card class="gauge-card">
    <ion-card-header>
      <ion-card-title>Uso de Funcionalidades</ion-card-title>
    </ion-card-header>
    <ion-card-content class="gauge-wrap">
      <div class="gauge">
        <div class="gauge-background"></div>
        <div class="gauge-fill" :style="{ transform: `rotate(${angle}deg)`, background: fillColor }"></div>
        <div class="cover">{{ pct }}%</div>
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';

const pct = ref(65);  // Porcentaje inicial
const angle = computed(() => pct.value / 100 * 180 - 90); // Ángulo del "fill" del gauge
const fillColor = computed(() => {
  if (pct.value <= 33) return '#FF6F61'; // Rojo
  if (pct.value <= 66) return '#FFD700'; // Amarillo
  return '#32CD32'; // Verde
});

onMounted(() => setTimeout(() => pct.value = 80, 800)); // Simulación del cambio de porcentaje
</script>

<style scoped>
.gauge-card {
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background: #ffffff;
  margin: 20px;
  overflow: hidden;
}

/* Contenedor de la gráfica */
.gauge-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

/* Estilo del fondo del gauge */
.gauge {
  position: relative;
  width: 180px;
  height: 90px;
  background: transparent;
  border-radius: 90px 90px 0 0; /* Sólo parte superior redondeada */
  overflow: hidden;
  box-shadow: inset 0px 5px 10px rgba(0, 0, 0, 0.1);
}

/* Fondo gris del semi-círculo */
.gauge-background {
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 90px 90px 0 0;
}

/* Llenado animado del semi-círculo */
.gauge-fill {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 90px 90px 0 0;
  transform-origin: center bottom;
  transition: transform 1s ease-in-out;
}

/* Texto del centro */
.cover {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8em;
  font-weight: bold;
  color: #333;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
