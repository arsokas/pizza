<template>
  <v-container fluid class="pa-0">
    <MenuHeader />
    <MenuMainComponent />
  </v-container>
</template>

<script>
import MenuHeader from "./MenuHeader";
import MenuMainComponent from "./MenuMainComponent";
export default {
  name: "Menu",
  components: { MenuHeader, MenuMainComponent }
};
</script>

<style scoped>
</style>
