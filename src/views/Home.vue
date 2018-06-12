<template>
  <div>
    <br>
    <div class="card border-primary mb-3" v-if="posts.length === 0">
      <div class="card-body">
        <p class="card-text">Sorry, there are no posts here yet. Please, <router-link tag="button" class="btn btn-success" to="/addPhrase">Add your first post</router-link></p>
      </div>
    </div>

    <div class="card border-primary mb-3" v-for="post in posts">
      <div class="card-body post-item-card">
        <p class="card-text">{{ post.postContent }}</p>
        <footer class="blockquote-footer">
          {{ post.childName }}
          <cite title="Source Title">{{ post.childAge }} years</cite>
        </footer>
        <span class="like-btn badge-dark"> <svg class="icon"><use xlink:href="#i-heart"></use></svg> </span>
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

<style scoped>
  .card-body.post-item-card {
    padding: .75rem 3rem .75rem .75rem;
    position: relative;
  }
  .like-btn {
    background-color: #e5512b;
    position: absolute;
    right: .75rem;
    top: 50%;
    padding: 5px;
    line-height: 0;
    transform: translateY(-50%);
    fill: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
  }
  .like-btn:hover {
    fill: rgba(255, 255, 255, 0.4);
  }
</style>