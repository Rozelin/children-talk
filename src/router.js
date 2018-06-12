import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import Home from './views/Home.vue'
import About from './views/About.vue'
import UserProfile from './components/UserProfile.vue'
import addPhrase from './components/addPhrase.vue'
import Login from './views/Login.vue'
import Registration from './views/Registration.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/profile',
      name: 'profile',
      component: UserProfile,
      beforeEnter (to, from, next) { (this.$store.state.userToken !== null ) ? next() : next('/login') }
    },
    {
      path: '/addPhrase',
      name: 'addPhrase',
      component: addPhrase
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Registration',
      component: Registration
    }
  ]
})
