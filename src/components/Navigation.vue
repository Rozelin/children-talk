<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Children Talk</a>
    <button class="navbar-toggler collapsed" type="button" @click="navbarOpnd = !navbarOpnd">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse"  :class="{show: navbarOpnd}">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" class="nav-item" to="/"><a class="nav-link">Home</a></router-link>
        <router-link tag="li" class="nav-item" to="/about"><a class="nav-link">About</a></router-link>
        <router-link v-if="userLoggedIn" tag="li" class="nav-item" to="/addPhrase"><a class="nav-link">Add New</a></router-link>
      </ul>
      <ul class="navbar-nav">
        <router-link v-if="!userLoggedIn" tag="li" class="nav-item" to="/register"><a class="nav-link">Register</a></router-link>
        <router-link v-if="!userLoggedIn" tag="li" class="nav-item" to="/login"><a class="nav-link">Login</a></router-link>
        <router-link v-if="userLoggedIn" tag="li" class="nav-item" to="/profile"><a class="nav-link">Profile</a></router-link>
        <li class="nav-item" v-if="userLoggedIn"><a class="nav-link" @click="logOut">Logout</a></li>
      </ul>
    </div>
  </nav>
</template>
<script>
  export default {
      data() {
          return {
              navbarOpnd: false
          }
      },
      computed: {
        userLoggedIn() {
          return this.$store.state.userToken !== null;
        }
      },
      methods: {
        logOut() {
          this.$store.dispatch('logOut');
        }
      }
  }
</script>

<style>
  [class^="i-"], [class*="i-"] {
      height: 32px;
      width: 32px;
      display: inline-block;
      fill: currentColor;
  }
</style>
