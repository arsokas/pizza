<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col class="pa-0">
        <v-img
          height="400"
          src="https://dk-spisbedre-production.imgix.net/images/recipes/pizza-med-chorizo-og-lagret-cheddar_7351.jpg?fit=crop&crop=focalpoint&fp-x=0.45&fp-y=0.46616618701094&fp-z=1.1111111111111&w=1200&h=628"
        >
          <v-row justify="center">
            <div class="header-text my-10" align="center">Menu</div>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Menu-Header"
};
</script>

<style scoped>
.header-text {
  font-size: 78px;
  font-weight: bold;
  color: white;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}
</style>
