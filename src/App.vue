<template>
  <div class="container">
    <app-navigation></app-navigation>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

    <app-svg></app-svg>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Svg from './assets/Svgs.vue';
import store from './store';

import axios from 'axios';

export default {
  components: {
    'app-navigation': Navigation,
    'app-svg': Svg
  },
  created() {
    axios.get('https://children-talk-11.firebaseio.com/posts.json')
      .then((res) => {
        const data = res.data;
        const posts = [];
        for (let key in data) {
          const post = data[key];
          post.id = key;
          posts.push(post);
        }
        this.$store.dispatch('createInitialList', posts);
      })
      .catch((err) => console.log(err));

      this.$store.dispatch('checkForAuthentication');
  }
}

</script>

<style>
   body { background-color: #752853; }
   .icon-primary { fill: #E95420 !important; }
   .icon-base { fill: white; }
  .fade-enter { opacity: 0;  }
  .fade-enter-active { transition: opacity .5s;  }
  .fade-leave {}
  .fade-leave-active { transition: opacity .5s;    opacity: 0; }
</style>
