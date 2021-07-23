import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: "Banana", price: 30 },
      { name: "Cherry", price: 40 },
      { name: "Kiwi", price: 300 },
      { name: "Mandarin", price: 330 },
    ],
  },

  getters: {
    saleProducts: state => {
      var saleProducts = state.products.map((product) => {
        return {
          name: "**" + product.name + "**",
          price: product.price / 2,
        };
      });
      return saleProducts;
    },
  },
  mutations: {
    reducePrice: state =>{
      state.products.forEach((product) => {
        product.price -= 1;
      });
    }
  },
  actions: {},
  modules: {},
});

// // import dependency to handle HTTP request to our back end
// import axios from 'axios'

// //to handle state
// const state = {}

// //to handle state
// const getters = {}

// //to handle actions
// const actions = {}

// //to handle mutations
// const mutations = {}

// //export store module
// export default {
//     state,
//     getters,
//     actions,
//     mutations
// }
// /** we have just created a boiler plate for our vuex store module**/
