import Vue from "vue";
import Router from "vue-router";
import About from "./views/Home.vue";
import Help from "./views/Help.vue";
import Home from "./views/About.vue";
import Projects from "./views/Projects.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/aboutMe",
      name: "aboutMe",
      component: About
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/help",
      name: "help",
      component: Help
    },
    {
      path: "/otherProjects",
      name: "otherProjects",
      component: Projects
    }
  ]
});
