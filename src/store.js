import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from './router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userCollection: [],
    userToken: null,
    userEmail: null,
    userId: null
  },
  mutations: {
    createInitialList(state, data) {
      state.userCollection = data;
    },
    addNewPost(state, data) {
      state.userCollection.push(data);
    },
    authUser(state, userData) {
      state.userToken = userData.token;
      state.userId = userData.userId;
      state.userEmail = userData.email;
    }
  },
  getters: {

  },
  actions: {
    createInitialList({commit}, posts) {
      commit('createInitialList', posts);
    },
    login({commit}, authData) {
      commit('authUser', authData);
      localStorage.setItem('idToken', authData.token);
      localStorage.setItem('userId', authData.userId);
      localStorage.setItem('userEmail', authData.email);
      setTimeout(function() { router.push('/') }, 3000)
    },
    logOut({commit}) {
      commit('authUser', { token: null, email: null, userId: null });
      localStorage.removeItem('idToken');
      localStorage.removeItem('userId');
      localStorage.removeItem('userEmail');
      router.push('/');
    },
    checkForAuthentication({commit}) {
      if (localStorage.getItem('idToken')) {
        var userData = {
          email: localStorage.getItem('idToken'),
          userId: localStorage.getItem('userId'),
          token: localStorage.getItem('userEmail')
        }
        commit('authUser', userData);
      }

    }
  }
})
