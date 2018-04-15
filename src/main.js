import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import { store } from './store/store'
import 'bootstrap/scss/bootstrap.scss';
Vue.use(Vuex)
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
