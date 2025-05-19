<template>
  <ion-page>
    <ion-header>
      <ion-toolbar style="--background: #770265; --color: #fff;">
        <ion-buttons slot="start">
          <ion-menu-button />
        </ion-buttons>
        <ion-title>Aspectos Externos</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding animated-gradient-bg">
      <ion-grid>
        <ion-row gutter="16">
          <ion-col size="12" size-md="6" size-lg="6">
            <NewUsersChart />
          </ion-col>
          <ion-col size="12" size-md="6" size-lg="6">
            <GenrePopularityChart />
          </ion-col>

          <ion-col size="12" size-md="12" size-lg="12">
            <ViewedAnimesChart />
          </ion-col>

          <ion-col size="12" size-md="6" size-lg="6">
            <ReviewsChart />
          </ion-col>
          <ion-col size="12" size-md="6" size-lg="6">
            <SocialInteractionChart />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
// Importa los estilos globales para el degradado animado
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

import NewUsersChart from '@/components/External/NewUsersChart.vue'
import GenrePopularityChart from '@/components/External/GenrePopularityChart.vue'
import ViewedAnimesChart from '@/components/External/ViewedAnimesChart.vue'
import ReviewsChart from '@/components/External/ReviewsChart.vue'
import SocialInteractionChart from '@/components/External/SocialInteractionChart.vue'
</script>
