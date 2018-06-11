import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userCollection: []
  },
  mutations: {
    createInitialList(state, data) {
      state.userCollection = data;
    },
    addNewPost(state, data) {
      state.userCollection.push(data);
    }
  },
  getters: {

  },
  actions: {

  }
})
