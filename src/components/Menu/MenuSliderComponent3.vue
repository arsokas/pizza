<template>
  <v-container fill-height class="my-10">
    <v-row align="center" justify="center" class="pa-0 image-with-background bordered-container">
      <v-col class="pa-0" align="center" justify="center">
        <v-img class="menu-image" v-bind:src="firstImage"></v-img>
      </v-col>
      <v-col class="menu-data-table" align="center" justify="center">
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
    </v-row>
    <v-row align="center" justify="center">
      <v-chip class="ma-2" color="green" text-color="white">{{ firstItemDescription }}</v-chip>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "MenuSliderComponent3",
  data() {
    return {
      firstItemDescription:
        "Click on menu and select pizza to see ingredients and options.",
      firstImage:
        "https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",
      pizzas: [
        {
          name: "Margherita10",
          price: 159 + " DKK",
          src:
            "https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg",
          ingredients: "Cheese and other delicious ingredients"
        },
        {
          name: "Margherita11",
          price: 159 + " DKK",
          src:
            "https://www.fifteenspatulas.com/wp-content/uploads/2012/11/Tiramisu-Fifteen-Spatulas-1-640x424.jpg",
          ingredients: "Cheese and other delicious ingredients and more"
        },
        {
          name: "Margherita12",
          price: 159 + " DKK",
          src:
            "https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",
          ingredients: "Cheese and other delicious ingredients even more"
        },
        {
          name: "Margherita13",
          price: 159 + " DKK",
          src:
            "https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg",
          ingredients: "Cheese and other delicious ingredients"
        },
        {
          name: "Margherita14",
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
  background-color: lightslategrey;
}

.menu-data-table {
  height: 100%;
}
</style>
