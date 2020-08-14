<template>
  <v-container fill-height class="my-10">
    <v-row align="center" justify="center" class="pa-0 image-with-background bordered-container">
      <v-col align="center" justify="center">
        <v-simple-table class="table-width">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="menu-item"
                v-for="item in pizzas"
                :key="item.name"
                v-on:click="renderMenuImage(item)"
              >
                <td>{{ item.name }}</td>
                <td class="text-center">{{ item.price }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
      <v-col class="menu-data-table pa-0" align="center" justify="center">
        <v-img class="menu-image" v-bind:src="firstImage"></v-img>
      </v-col>
    </v-row>
    <v-row align="center" justify="center">
      <v-chip class="ma-2" color="green" text-color="white">{{ firstItemDescription }}</v-chip>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MenuSliderComponent2",
  data() {
    return {
      firstItemDescription:
        "Click on menu and select pizza to see ingredients and options.",
      firstImage:
        "https://lh3.googleusercontent.com/proxy/kpBqpLSYAYOkUvbJ8zftZ-JmE5dAZ6YbeAnM5bSvsRMo8AVQnsRjwMLmRrApqDiyW1ArXB3N5B8z4R5X-Jpfv8RijtXhwgmCwCJo2ggRzbhdWNyyUy0akp0D",
      pizzas: [
        {
          name: "Margherita5",
          price: 159 + " DKK",
          src:
            "https://lh3.googleusercontent.com/proxy/yCRvsavLXDjFVVCK4ARLwM5zMOfS5P0dOJj77Y8UtZslhB-GAfa4ALbeEwvNLXeF5m-ZYSPtHcpSob0ctmIUk4rqa1DEw8NZOr-BRG0c1jPWJP28o0FKSVA_uMdSGbru-0qlbN8x",
          ingredients: "Cheese and other delicious ingredients"
        },
        {
          name: "Margherita6",
          price: 159 + " DKK",
          src:
            "https://lh3.googleusercontent.com/proxy/zYoyD8i_qqiMYaqtNrBjs7s4Oj2kcdtpfpWlbmAJCuRRIAFni9Sb_5BqJ_WTNGxXoxx9V-sSa9_eI5kgYT41M2lUK8TB1JXG7azJ4HimBojKMzrMauPdDN24IdC-5wy2yaNfN1fFHDhtduw",
          ingredients: "Cheese and other delicious ingredients and more"
        },
        {
          name: "Margherita7",
          price: 159 + " DKK",
          src:
            "https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",
          ingredients: "Cheese and other delicious ingredients even more"
        },
        {
          name: "Margherita8",
          price: 159 + " DKK",
          src:
            "https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",
          ingredients: "Cheese and other delicious ingredients"
        },
        {
          name: "Margherita9",
          price: 159 + " DKK",
          src:
            "https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",
          ingredients: "Cheese and other delicious ingredients"
        }
      ]
    };
  },
  methods: {
    renderMenuImage(item) {
      console.log(item);
      this.firstImage = item.src;
      this.firstItemDescription = item.ingredients;
    }
  }
};
</script>

<style scoped>
.bordered-container {
  border: 1px solid black;
}
.menu-image {
  height: 350px;
  width: 610px;
}

.table-width {
  width: 650px;
}

.menu-item:hover {
  cursor: pointer;
}

.image-with-background {
  background-image: url("https://previews.123rf.com/images/primopiano/primopiano1705/primopiano170500417/77631122-grunge-surface-rustic-wooden-table-top-view-wood-texture-background-surface-with-old-natural-pattern.jpg");
  background-repeat: repeat;
}

.menu-data-table {
  height: 100%;
}
</style>
