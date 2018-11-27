import Vue from "vue";
import App from "./App.vue";
import veeValidate from "vee-validate";
import router from "./Router";
Vue.use(veeValidate);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
