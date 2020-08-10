<template>
  <v-container fluid class="pa-0">
    <HeaderComponent />
    <HomePageHeaderTitle />
    <ImageTextComponent />
  </v-container>
</template>
<script>
import HeaderComponent from "./HeaderComponent";
import HomePageHeaderTitle from "./HomePageHeaderTitle";
import ImageTextComponent from "./ImageTextComponent";
export default {
  name: "FooterComponent",
  components: { HeaderComponent, HomePageHeaderTitle, ImageTextComponent }
};
</script>
