<template>
  <v-carousel class="header-image" hide-delimiter-background :show-arrows="false">
    <v-carousel-item
      class="header-background"
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    >
      <v-row class="fill-height flex-column" align="center" justify="center">
        <div class="header-text" align="center">True Italian Pizza</div>
      </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      items: [
        {
          src: "https://wallpaperaccess.com/full/424487.jpg"
        },
        {
          src:
            "https://hdwallpaperim.com/wp-content/uploads/2017/09/17/60012-food-pizza-cheese.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.header-text {
  font-size: 78px;
  font-weight: bold;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
}

@media screen and (max-width: 1264px) {
  .header-text {
    font-size: 44px;

    padding-left: 40px;
    padding-right: 40px;
  }
  .header-image {
    max-height: 700px;
  }
}

.header-info-text {
  width: 400px;
  text-align: center;
  font-size: 28px;
}
</style>
