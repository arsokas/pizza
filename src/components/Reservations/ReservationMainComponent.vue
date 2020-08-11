<template>
  <v-row class="my-10">
    <v-col>
      <v-card max-width="375" class="mx-auto">
        <v-img
          src="https://visitsetouchi.com/wp-content/uploads/2019/09/DSC_8852-1200x800.jpg"
          height="200px"
          dark
        ></v-img>

        <v-list two-line>
          <v-list-item align="center">
            <v-list-item-content>
              <v-list-item-title class="text-h5">Make a Reservation:</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">mdi-phone</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>(+45) 45 45 45 45</v-list-item-title>
              <v-list-item-subtitle>Mobile</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action></v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>(+45) 44 44 44 44</v-list-item-title>
              <v-list-item-subtitle>Fax</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">mdi-email</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>boss@pizeria.com</v-list-item-title>
              <v-list-item-subtitle>Personal Management</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-action></v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>pizeria@pizeria.com</v-list-item-title>
              <v-list-item-subtitle>Work</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="indigo">mdi-map-marker</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Aalborggade 10</v-list-item-title>
              <v-list-item-subtitle>Aalborg DK, 9000</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Reservations-MainComponent"
};
</script>

<style scoped>
</style>
