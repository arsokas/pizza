<template>
  <v-row>
    <v-col align="center">
      <h3 class="text-h3 my-10">You can find us here:</h3>
      <iframe
        style="border:1px solid black"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        width="90%"
        height="400"
        src="https://maps.google.com/maps?hl=en&amp;q=Ryesgade 32, 9000 Aalborg&amp;ie=UTF8&amp;t=roadmap&amp;z=16&amp;iwloc=B&amp;output=embed"
      >
        <div>
          <small>
            <a href="http://embedgooglemaps.com">embedgooglemaps.com</a>
          </small>
        </div>
      </iframe>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "About-Us-Maps",
};
</script>

<style scoped>
.text-h3 {
  font-weight: bold;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(0, 0, 0, 0.7);
  color: white;
}
</style>
