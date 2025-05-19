<template>
  <ion-app>
    <!-- MENÚ LATERAL -->
    <ion-menu side="start" content-id="main" class="menu-content">
      <ion-header class="menu-header">
        <ion-toolbar>
          <ion-title>🌸 Menú</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list>
          <ion-item button router-link="/internos" router-direction="root" class="menu-item">
            <ion-icon slot="start" name="business-outline" />
            <ion-label>Aspectos Internos</ion-label>
          </ion-item>
          <ion-item button router-link="/externos" router-direction="root" class="menu-item">
            <ion-icon slot="start" name="globe-outline" />
            <ion-label>Aspectos Externos</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- VISTA PRINCIPAL -->
    <div class="ion-page main-view" id="main">
      <ion-router-outlet />
    </div>
  </ion-app>
</template>


<script lang="ts" setup>
import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonRouterOutlet
} from '@ionic/vue'
</script>

<style scoped>
/* 🎀 Fondo general del menú */
.menu-content::part(background) {
  background: #fde2e4; /* Rosa claro */
}

/* 🌸 Cabecera del menú */
.menu-header {
  background-color: #ec4899; /* Rosa fuerte */
  color: white;
  font-weight: bold;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

/* 🌟 Botones del menú */
.menu-item {
  --background: white;
  --color: #ec4899;
  border: 2px solid #ec4899;
  border-radius: 10px;
  margin: 14px 16px;
  padding: 12px;
  font-weight: bold;
  font-size: 16px;
  transition: 0.3s ease;
}

.menu-item:hover {
  background-color: #ffe4e9;
  transform: scale(1.02);
}

/* 🎯 Iconos en rosa */
ion-icon {
  color: #ec4899;
  font-size: 20px;
}

/* 📱 Vista principal */
.main-view {
  background-color: #fde2e4;
  min-height: 100vh;
}
</style>
