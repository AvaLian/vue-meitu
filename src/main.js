// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Select from 'select-plugin'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.use(Select)
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueAwesomeSwiper,
  store,
  template: '<App/>',
  components: { App }
})
