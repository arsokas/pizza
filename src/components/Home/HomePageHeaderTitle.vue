<template>
  <v-container>
    <v-row class="fill-height">
      <v-col align="center" justify="center">
        <h1 class="text-h1 mt-10 mb-10 mx-10">
          <span class="true-green">True&nbsp;</span>
          <span class="italian-white">Italian&nbsp;</span>
          <span class="pizza-red">Pizza</span>
        </h1>

        <blockquote class="blockquote">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores
          modi quidem veniam, expedita quis laboriosam, ullam facere adipisci,
          iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab
          at.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
          maiores modi quidem veniam, expedita quis laboriosam, ullam facere
          adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam
          fuga ab at.
        </blockquote>
      </v-col>
    </v-row>

    <v-row class="card-shadow my-10 flex-column">
      <v-col class="we-offer-card">
        <v-card class="mx-auto my-10 text-center we-offer-card-width" max-width="350">
          <v-img
            class="white--text align-end"
            height="150px"
            src="https://f3e6t7k9.stackpathcdn.com/wp-content/uploads/2018/02/radici-loti.jpg"
          >
            <v-card-title class="card-title">ITALIAN BRUNCH</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Everyday until 13:00</v-card-subtitle>

          <v-card-text class="text--primary">
            <img
              src="https://lh3.googleusercontent.com/proxy/xOgC7-MT5AjZ1Az26Vxbp6a5d3ws3TQomXcvQrbKib0naNm-jctt66w005jWi-gdmxFAAk51DYB9F6M-ay3ZofVLxzM3qDFsbLzV6xoF7e7yKku7Kjjg1_8SGNzgqylM8iNM9SXuXE_vEaP4QBkKVQXQZg"
              alt
              width="70%"
            />
            <div class="my-1">Appetizer - Kitchen Choice</div>
            <div class="my-1">Plate of Vrunch Food</div>
            <div class="my-1">Glass of Orange Juice</div>
            <div class="my-1">Desert and Prosecco</div>
            <v-btn class="ma-2" tile color="green" dark to="/menu">See Menu</v-btn>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto my-10 text-center" max-width="350">
          <v-img
            class="white--text align-end"
            height="150px"
            src="https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg"
          >
            <v-card-title class="card-title">ITALIAN PIZZA</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Monday 12:00 - Sunday 23:00</v-card-subtitle>

          <v-card-text class="text--primary">
            <img
              src="https://lh3.googleusercontent.com/proxy/xOgC7-MT5AjZ1Az26Vxbp6a5d3ws3TQomXcvQrbKib0naNm-jctt66w005jWi-gdmxFAAk51DYB9F6M-ay3ZofVLxzM3qDFsbLzV6xoF7e7yKku7Kjjg1_8SGNzgqylM8iNM9SXuXE_vEaP4QBkKVQXQZg"
              alt
              width="70%"
            />
            <div class="my-1">Napolitan Pizza</div>
            <div class="my-1">Vegetarian Pizza</div>
            <div class="my-1">Vegan Pizza</div>
            <div class="my-1">Pizza for Children</div>
            <v-btn class="ma-2" tile color="green" dark to="/menu">See Menu</v-btn>
          </v-card-text>
        </v-card>
        <v-card class="mx-auto my-10 text-center" max-width="350">
          <v-img
            class="white--text align-end"
            height="150px"
            src="https://i.ytimg.com/vi/2IyDN7o9r24/maxresdefault.jpg"
          >
            <v-card-title class="card-title">ITALIAN DINNER</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Monday 12:00 - Sunday 23:00</v-card-subtitle>

          <v-card-text class="text--primary">
            <img
              src="https://lh3.googleusercontent.com/proxy/xOgC7-MT5AjZ1Az26Vxbp6a5d3ws3TQomXcvQrbKib0naNm-jctt66w005jWi-gdmxFAAk51DYB9F6M-ay3ZofVLxzM3qDFsbLzV6xoF7e7yKku7Kjjg1_8SGNzgqylM8iNM9SXuXE_vEaP4QBkKVQXQZg"
              alt
              width="70%"
            />
            <div class="my-1">Italian Apetizers</div>
            <div class="my-1">Steaks from -119 DKK</div>
            <div class="my-1">Pastas from -90 DKK</div>
            <div class="my-1">Italian Deserts from -70 DKK</div>
            <v-btn class="ma-2" tile color="green" dark to="/menu">See Menu</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "HomePageHeaderTitle"
};
</script>

<style scoped>
.true-green {
  color: green;
}

.italian-white {
  color: white;
}

.pizza-red {
  color: red;
}

.image-header-text {
  position: absolute;
}

.text-h1 {
  font-weight: bold;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: black;
  color: white;
}

@media screen and (max-width: 1264px) {
  .text-h1 {
    font-size: 48px !important;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }
}

.text-h3 {
  font-weight: bold;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;
  color: white;
}

.card-title {
  font-weight: bold;
  font-size: 28px;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;
}

.we-offer-card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

/* @media screen and (max-width: 1264px) {
  .we-offer-card-width {
    max-width: 200px;
  }
} */
</style>
