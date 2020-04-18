import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbvue/build/css/mdb.css";
import swal from 'sweetalert';
import VueAnalytics from 'vue-analytics';

Vue.config.productionTip = false;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-163776127-1',
  router
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
