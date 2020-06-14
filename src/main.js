import Vue from "vue";
import App from "./App.vue";
import store from './store/store';

Vue.config.productionTip = false;
/** Tip to use ionicons v5 */
Vue.config.ignoredElements = [/^ion-/];

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
