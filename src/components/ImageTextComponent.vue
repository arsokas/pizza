<template>
  <v-container fill-height fluid class="my-10">
    <v-row align="center" justify="center" class="pa-0 image-with-background">
      <v-col class="pa-0">
        <v-img
          src="https://www.vincenzosplate.com/wp-content/uploads/2020/05/neapolitan-pizza-dough-johnny-di-francesco.jpg"
        ></v-img>
      </v-col>
      <v-col>
        <h2 align="center" class="text-h2 mx-10 my-5">History of Italian and Napolitan Pizza</h2>
        <p class="text mt-10 mx-10">
          This is a lot of random text for image-text section paragraph. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui id modi facilis, a eius suscipit rem, cumque praesentium dolore,
          alias esse perferendis consequatur nostrum minus non aliquam corporis optio ullam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ImageTextComponent"
};
</script>

<style scoped>
.image-with-background {
  background-color: #966f33;
}

.text-h2 {
  font-weight: bold;
  color: white;
}

p {
  color: white;
  font-size: 20px;
}

@media screen and (max-width: 1264px) {
  p {
    font-size: 16px;
  }
  .text-h2 {
    font-size: 34px !important;
  }
}
</style>
