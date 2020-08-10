<template>
  <v-container fluid class="pa-0">
    <AboutUsHeader />
    <AboutUsIntro />
    <OpeningHours />
    <AboutUsMaps />
  </v-container>
</template>

<script>
import AboutUsHeader from "./AboutUsHeader";
import AboutUsMaps from "./AboutUsMaps";
import OpeningHours from "./OpeningHours";
import AboutUsIntro from "./AboutUsIntro";
export default {
  name: "About-Us-HeaderComponent",
  components: { AboutUsHeader, AboutUsMaps, OpeningHours, AboutUsIntro }
};
</script>

<style scoped>
</style>
