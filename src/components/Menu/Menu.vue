<template>
  <v-container fluid class="pa-0">
    <MenuHeader />
    <MenuMainComponent />
    <MenuSliderComponent />
    <MenuSliderComponent2 />
    <MenuSliderComponent3 />
  </v-container>
</template>

<script>
import MenuHeader from "./MenuHeader";
import MenuMainComponent from "./MenuMainComponent";
import MenuSliderComponent from "./MenuSliderComponent";
import MenuSliderComponent2 from "./MenuSliderComponent2";
import MenuSliderComponent3 from "./MenuSliderComponent3";
export default {
  name: "Menu",
  components: {
    MenuHeader,
    MenuMainComponent,
    MenuSliderComponent,
    MenuSliderComponent2,
    MenuSliderComponent3
  }
};
</script>

<style scoped>
</style>
