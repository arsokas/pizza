<template>
  <v-container fluid class="pa-0">
    <ReservationsHeader />
    <ReservationsIntro />
    <ReservationsMainComponent />
  </v-container>
</template>

<script>
import ReservationsHeader from "./ReservationsHeader";
import ReservationsIntro from "./ReservationsIntro";
import ReservationsMainComponent from "./ReservationMainComponent";
export default {
  name: "Reservations",
  components: {
    ReservationsHeader,
    ReservationsIntro,
    ReservationsMainComponent
  }
};
</script>

<style scoped>
</style>