import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import axios from 'axios';
import router from './router';
import "./assets/sass/base.scss";

Vue.prototype.$axios=axios;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
