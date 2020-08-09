<template>
  <v-app>
    <v-main>
      <NavBar />
      <Home />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBarComponent";
import FooterComponent from "./components/FooterComponent";
import Home from "./components/Home";
export default {
  name: "App",
  data: () => ({}),

  components: {
    FooterComponent,
    NavBar,
    Home
  }
};
</script>

<style scoped>
#app {
  background-color: #f1f9fa;
}
</style>
