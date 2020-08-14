<template>
  <v-container fluid class="pa-0">
    <HeaderComponent />
    <HomePageHeaderTitle />
    <HomeTextElement />
    <HomeSpecials />
    <HomeTextElement />
    <HomeImageText />
    <ImageTextComponent />
  </v-container>
</template>
<script>
import HeaderComponent from "./HeaderComponent";
import HomePageHeaderTitle from "./HomePageHeaderTitle";
import ImageTextComponent from "./ImageTextComponent";
import HomeImageText from "./HomeImageText";
import HomeTextElement from "./HomeTextElement";
import HomeSpecials from "./HomeSpecials";
export default {
  name: "FooterComponent",
  components: {
    HeaderComponent,
    HomePageHeaderTitle,
    ImageTextComponent,
    HomeImageText,
    HomeTextElement,
    HomeSpecials
  }
};
</script>
