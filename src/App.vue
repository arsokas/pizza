<template>
  <v-app>
    <v-main>
      <NavBar />
      <router-view></router-view>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
export default {
  name: "App",
  data: () => ({}),

  components: {
    FooterComponent,
    NavBar
  }
};
</script>

<style scoped>
#app {
  background-color: #f1f9fa;
}
</style>
