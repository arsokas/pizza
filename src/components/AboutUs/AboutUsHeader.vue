<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col class="pa-0">
        <v-img height="400" src="https://wallpaperaccess.com/full/424487.jpg">
          <v-row justify="center">
            <div class="header-text my-10" align="center">About Us</div>
          </v-row>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About-Us-Header"
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
@media screen and (max-width: 1264px) {
  .header-text {
    font-size: 44px;
  }
}
</style>
