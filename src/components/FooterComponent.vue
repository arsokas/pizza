<template>
  <v-footer padless>
    <v-row>
      <v-col align="center" justify="center">
        <v-img
          width="300px"
          src="https://www.graziemilleuk.com/wp-content/uploads/2019/09/logo.png"
        ></v-img>
      </v-col>

      <v-col class="text-center" cols="12">
        <strong>Alborggade 1, 9000 Aalborg | Tel. 45 45 45 45 | pizza@pizzeria.com</strong>
        <p class="mt-5">
          &copy;
          {{ new Date().getFullYear() }} — Your Pizzeria | Made by Arnas Sokolovas
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  name: "FooterComponent"
};
</script>
