<template>
  <v-container fluid class="pa-0">
    <HeaderComponent />
    <HomePageHeaderTitle />
  </v-container>
</template>
<script>
import HeaderComponent from "./HeaderComponent";
import HomePageHeaderTitle from "./HomePageHeaderTitle";
export default {
  name: "FooterComponent",
  components: { HeaderComponent, HomePageHeaderTitle },
};
</script>
