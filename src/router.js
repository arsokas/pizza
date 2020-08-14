import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "home",
      component: () => import("./components/Home/Home"),
    },
    {
      path: "/menu",
      alias: "/menu",
      name: "Menu",
      component: () => import("./components/Menu/Menu"),
    },
    {
      path: "/about-us",
      alias: "/about-us",
      name: "AboutUs",
      component: () => import("./components/AboutUs/AboutUs"),
    },
    {
      path: "/reservations",
      alias: "/reservations",
      name: "Reservations",
      component: () => import("./components/Reservations/Reservations"),
    },
  ],
});

Router.replace({
  path: "*",
  redirect: "/",
  component: () => import("./components/Home/Home"),
});
