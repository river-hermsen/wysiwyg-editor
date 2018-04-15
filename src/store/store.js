import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    htmlCode: '<h1>Hello World!</h1>',
    cssCode: `h1 {
  color: red !important;
}`
  },
  mutations: {
    showModal (state) {
      console.log('yayayaya');
    }
  }
})
