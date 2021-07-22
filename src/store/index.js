import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      { name: "Banana", price: 30 },
      { name: "Cherry", price: 40 },
      { name: "Kiwi", price: 300 },
      { name: "Mandarin", price: 330 },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
