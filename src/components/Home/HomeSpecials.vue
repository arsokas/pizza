<template>
  <v-container fill-height>
    <v-row align="center" justify="center" class="pa-0 image-with-background">
      <v-col>
        <v-card color="#1F7087" dark>
          <div class="d-flex flex-no-wrap justify-space-between home-specials-image">
            <div>
              <v-card-title>SPECIALS</v-card-title>
              <v-card-subtitle>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae minus ipsum provident aliquam. Amet, commodi consectetur repellat, doloribus fugiat iure molestias, inventore eaque facilis veritatis reiciendis nulla. Porro, temporibus eum!</v-card-subtitle>
            </div>
            <div class="image-specials-div">
              <v-img
                class="image-specials"
                height="200px"
                src="https://lh3.googleusercontent.com/proxy/GHqOZ6FyNp58LRdiSSwuNraO_KTJEIVSHzyU2nUhI6h_v_9j3HxJILZSdkxANVAVUHA5JhTNAWiU-CLsQc-hjcOCKT9uXsszmvilCxUAg7uiBdlnf8G19H81OlWPwbgG-9ZjVTK3SirErgLGSER5wg"
              ></v-img>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeSpecials"
};
</script>

<style scoped>
@media screen and (max-width: 991px) {
  .home-specials-image {
    flex-direction: column;
  }
  .image-specials {
    width: 200px;
  }
  .image-specials-div {
    justify-content: center;
    display: grid;
  }
}
</style>
