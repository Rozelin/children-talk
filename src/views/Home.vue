<template>
  <div>
    <br>
    <div class="card border-primary mb-3" v-if="posts.length === 0">
      <div class="card-body">
        <p class="card-text">Sorry, there are no posts here yet. Please, <router-link tag="button" class="btn btn-success" to="/addPhrase">Add your first post</router-link></p>
      </div>
    </div>

    <div class="card border-primary mb-3" v-for="post in posts">
      <div class="card-body">
        <p class="card-text">{{ post.postContent }}</p>
        <footer class="blockquote-footer">
          {{ post.childName }}
          <cite title="Source Title">{{ post.childAge }} years</cite>
          <span class="badge badge-pill badge-dark">Dark &#9825;</span>
        </footer>

      </div>
    </div>

    <button type="button" class="btn btn-primary" v-if="posts.length > 0">Load more</button>

  </div>
</template>

<script>
  export default {
    name: 'home',
    computed: {
      posts() {
        return this.$store.state.userCollection;
      }
    },
    components: {

    }
  }
</script>
