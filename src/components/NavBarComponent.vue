<template>
  <v-container fluid class="pa-0">
    <v-toolbar height="100">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-divider class="mx-4" vertical></v-divider>
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            alt="Pizza Logo"
            src="https://image-cdn.neatoshop.com/styleimg/86189/none/white/default/415564-20;1555584537u.jpg"
            width="100"
          ></v-img>
        </router-link>
      </div>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text class="disable-events">Aalborgade 10, Aalborg</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn to="/" text>
          <v-icon>fas fa-home</v-icon>
        </v-btn>

        <v-divider vertical></v-divider>
        <v-btn to="/menu" text>Menu</v-btn>

        <v-divider vertical></v-divider>

        <v-btn to="/about-us" text>About Us</v-btn>

        <v-divider vertical></v-divider>

        <v-btn text to="/reservations">Reservations</v-btn>

        <v-divider vertical></v-divider>

        <v-btn text class="disable-events">
          <v-icon>fas fa-phone</v-icon>
          <span>45 45 45 45</span>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar width="80px;" height="80px;">
          <v-img
            src="https://image-cdn.neatoshop.com/styleimg/86189/none/white/default/415564-20;1555584537u.jpg"
          ></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense align="center" justify="center">
        <v-list-item to="/">
          <v-list-item-icon class="aligned-icon">
            <v-icon>fas fa-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/menu">
          <v-list-item-icon class="aligned-icon">
            <v-icon>fas fa-list</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Menu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about-us">
          <v-list-item-icon class="aligned-icon">
            <v-icon>fas fa-info</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About Us</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/reservations">
          <v-list-item-icon class="aligned-icon">
            <v-icon>fas fa-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Reservations</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>


<script>
export default {
  name: "NavbarComponent",
  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style scoped>
.disable-events {
  pointer-events: none;
}

.aligned-icon {
  display: grid;
}
</style>


