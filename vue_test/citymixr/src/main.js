import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import VueNotifications from 'vue-notifications'
// import miniToastr from 'mini-toastr'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(BootstrapVue);
export const serverBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



