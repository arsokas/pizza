<template>
  <v-toolbar height="100">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-divider class="mx-4" vertical></v-divider>
    <div class="d-flex align-center">
      <v-img
        alt="Pizza Logo"
        src="https://image-cdn.neatoshop.com/styleimg/86189/none/white/default/415564-20;1555584537u.jpg"
        width="100"
      />
    </div>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text class="disable-events">Aalborgade 10, Aalborg</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn text>Menu</v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>About Us</v-btn>

      <v-divider vertical></v-divider>

      <v-btn text>Reservations</v-btn>

      <v-divider vertical></v-divider>

      <v-btn text class="disable-events">
        <v-icon>fas fa-phone</v-icon>
        <span>45 45 45 45</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>


<script>
export default {
  name: "NavbarComponent"
};
</script>

<style scoped>
.disable-events {
  pointer-events: none;
}
</style>


