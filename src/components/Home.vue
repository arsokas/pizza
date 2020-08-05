<template>
  <v-container fluid class="pa-0">
    <HeaderComponent />
  </v-container>
</template>
<script>
import HeaderComponent from "./HeaderComponent";
export default {
  name: "FooterComponent",
  components: { HeaderComponent }
};
</script>
