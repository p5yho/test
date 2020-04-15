import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Help from "./views/Help.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/",
      name: "about",
      component: About
    },
    {
      path: "/help",
      name: "help",
      component: Help
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects
    }
  ]
});
