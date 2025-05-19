<template>
  <ion-page>
    <ion-header>
      <ion-toolbar style="--background: #770265; --color: #fff;">
        <ion-buttons slot="start">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>Aspectos Internos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding animated-gradient-bg">
      <ion-grid>
        <ion-row gutter="16">
          <ion-col size="12" size-md="6" size-lg="6" class="chart-card">
            <LineChart />
          </ion-col>
          <ion-col size="12" size-md="6" size-lg="6" class="chart-card">
            <PerformanceChart />
          </ion-col>

          <ion-col size="12" size-md="12" size-lg="12" class="big-chart-card">
            <ErrorChart />
          </ion-col>

          <ion-col size="12" size-md="6" size-lg="6" class="chart-card">
            <UsageChart />
          </ion-col>
          <ion-col size="12" size-md="6" size-lg="6" class="chart-card">
            <RealTimeUsersChart />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
// Importa estilos globales para el degradado animado
import '@/assets/global.css'

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButtons,
  IonMenuButton
} from '@ionic/vue'

import LineChart from '@/components/Internal/LineChart.vue'
import PerformanceChart from '@/components/Internal/PerformanceChart.vue'
import ErrorChart from '@/components/Internal/ErrorChart.vue'
import UsageChart from '@/components/Internal/UsageChart.vue'
import RealTimeUsersChart from '@/components/Internal/RealTimeUsersChart.vue'
</script>

