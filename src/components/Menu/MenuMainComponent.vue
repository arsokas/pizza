<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col class="pa-10">
        <div class="display-1 pa-5">Pizza Menu:</div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-center">Price</th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in pizzas" :key="item.name">
                <td>{{ item.name }}</td>
                <td class="text-center">{{ item.price }}</td>
                <td align="center">
                  <v-img v-bind:src="item.src" height="100" width="200"></v-img>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-10">
        <div class="display-1 pa-5">Pasta Menu:</div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-center">Price</th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in pastas" :key="item.name">
                <td>{{ item.name }}</td>
                <td class="text-center">{{ item.price }}</td>
                <td align="center">
                  <v-img v-bind:src="item.src" height="100" width="200"></v-img>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="pa-10">
        <div class="display-1 pa-5">Desserts Menu:</div>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Name</th>
                <th class="text-center">Price</th>
                <th class="text-left"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td class="text-center">{{ item.price }}</td>
                <td align="center">
                  <v-img v-bind:src="item.src" height="100" width="200"></v-img>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Menu-MainComponent",
  data() {
    return {
      pizzas: [
        {
          name: "Margherita",
          price: 159 + " DKK",
          src:
            "https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg"
        },
        {
          name: "Margherita",
          price: 159 + " DKK",
          src:
            "https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg"
        },
        {
          name: "Margherita",
          price: 159 + " DKK",
          src:
            "https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg"
        },
        {
          name: "Margherita",
          price: 159 + " DKK",
          src:
            "https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg"
        },
        {
          name: "Margherita",
          price: 159 + " DKK",
          src:
            "https://vignettepizzeria.com/wp-content/uploads/pizza-2978377_1920-1.jpg"
        }
      ],
      pastas: [
        {
          name: "Pasta",
          price: 109 + " DKK",
          src:
            "https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg"
        },
        {
          name: "Pasta",
          price: 109 + " DKK",
          src:
            "https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg"
        },
        {
          name: "Pasta",
          price: 109 + " DKK",
          src:
            "https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg"
        },
        {
          name: "Pasta",
          price: 109 + " DKK",
          src:
            "https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg"
        },
        {
          name: "Pasta",
          price: 109 + " DKK",
          src:
            "https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg"
        },
        {
          name: "Pasta",
          price: 109 + " DKK",
          src:
            "https://www.recipetineats.com/wp-content/uploads/2014/06/Pasta1.jpg"
        }
      ],
      desserts: [
        {
          name: "Cake",
          price: 159 + " DKK",
          src:
            "https://www.fifteenspatulas.com/wp-content/uploads/2012/11/Tiramisu-Fifteen-Spatulas-1-640x424.jpg"
        },
        {
          name: "Cake",
          price: 159 + " DKK",
          src:
            "https://www.fifteenspatulas.com/wp-content/uploads/2012/11/Tiramisu-Fifteen-Spatulas-1-640x424.jpg"
        },
        {
          name: "Cake",
          price: 159 + " DKK",
          src:
            "https://www.fifteenspatulas.com/wp-content/uploads/2012/11/Tiramisu-Fifteen-Spatulas-1-640x424.jpg"
        },
        {
          name: "Cake",
          price: 159 + " DKK",
          src:
            "https://www.fifteenspatulas.com/wp-content/uploads/2012/11/Tiramisu-Fifteen-Spatulas-1-640x424.jpg"
        },
        {
          name: "Cake",
          price: 159 + " DKK",
          src:
            "https://www.fifteenspatulas.com/wp-content/uploads/2012/11/Tiramisu-Fifteen-Spatulas-1-640x424.jpg"
        },
        {
          name: "Cake",
          price: 159 + " DKK",
          src:
            "https://www.fifteenspatulas.com/wp-content/uploads/2012/11/Tiramisu-Fifteen-Spatulas-1-640x424.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
