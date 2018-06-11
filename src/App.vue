<template>
  <div class="container">
    <app-navigation></app-navigation>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import axios from 'axios';

export default {
  components: {
    'app-navigation': Navigation
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
        this.$store.commit('createInitialList', posts);
      })
      .catch((err) => console.log(err));
  }
}

</script>

<style scoped>
  .fade-enter { opacity: 0;  }
  .fade-enter-active { transition: opacity .5s;  }
  .fade-leave {}
  .fade-leave-active { transition: opacity .5s;    opacity: 0; }
</style>
