<template>
  <div class="row-12">
    <br>
    <h2>Add new phrase here</h2>
    <br>
    <form>
        <div class="form-group">
          <textarea rows="3" class="form-control" placeholder="Enter your phrase" v-model="postItem.postContent" required></textarea>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Name" v-model="postItem.childName" required>
        </div>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Age" v-model="postItem.childAge" required>
        </div>

        <div class="form-group">
         <div class="custom-control custom-radio">
           <input type="radio" class="custom-control-input" id="status1" v-model="postItem.publicStatus" value="privat" checked required>
           <label class="custom-control-label" for="status1">Privat</label>
         </div>
         <div class="custom-control custom-radio">
           <input type="radio" class="custom-control-input"  id="status2" v-model="postItem.publicStatus"  value="public" required>
           <label class="custom-control-label" for="status2">Public</label>
         </div>
       </div>
       <br>
       <button type="button" class="btn btn-primary" @click="savePost">Save</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        postItem: {
          postId: this.randomId,
          userId: '',
          postContent: '',
          createDate: '',
          childName: '',
          childAge: null,
          likes: 0,
          publicStatus: 'privat'
        }
      }
    },
    methods: {
      savePost() {
        this.$store.commit('addNewPost', this.postItem);
        axios.post('https://children-talk-11.firebaseio.com/posts.json', this.postItem)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      }
    },
    computed: {
      randomId() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      }
    }
  }
</script>
