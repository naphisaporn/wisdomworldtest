import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vue2Filters from "vue2-filters";
import Vuetify from "vuetify";

Vue.config.productionTip = false



Vue.use(Vue2Filters);
Vue.use(Vuetify);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
