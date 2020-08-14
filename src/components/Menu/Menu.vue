<template>
  <v-container fluid class="pa-0">
    <MenuHeader />
    <MenuSliderComponent />
    <MenuSliderComponent2 />
    <MenuSliderComponent3 />
  </v-container>
</template>

<script>
import MenuHeader from "./MenuHeader";
import MenuSliderComponent from "./MenuSliderComponent";
import MenuSliderComponent2 from "./MenuSliderComponent2";
import MenuSliderComponent3 from "./MenuSliderComponent3";
export default {
  name: "Menu",
  components: {
    MenuHeader,
    MenuSliderComponent,
    MenuSliderComponent2,
    MenuSliderComponent3
  }
};
</script>

<style scoped>
</style>
