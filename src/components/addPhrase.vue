<template>
  <div class="row">
    <br>
    <div class="card border-dark col">
        <div class="card-body">
            <br>
            <h4 class="card-title text-primary">
                <svg class="icon icon-primary"><use xlink:href="#i-pen"></use></svg>
                Add new cute phrase here
            </h4>
            <form>
                <div class="form-group">
                    <textarea rows="3" class="form-control" placeholder="Enter your phrase" v-model="postItem.postContent" required></textarea>
                </div>
                <div class="row">
                    <div class="form-group col-sm-12 col-md-4">
                        <input type="text" class="form-control" placeholder="Name" v-model="postItem.childName" required>
                    </div>
                    <div class="form-group col-sm-12 col-md-4">
                        <input type="text" class="form-control" placeholder="Age" v-model="postItem.childAge" required>
                    </div>
                    <div class="form-group col-sm-12 col-md-4">
                        <div class="row justify-content-center">
                            <div class="custom-control custom-radio col-3">
                                <input type="radio" class="custom-control-input" id="status1" v-model="postItem.publicStatus" value="privat" checked required>
                                <label class="custom-control-label text-muted" for="status1">Privat</label>
                            </div>
                            <div class="custom-control custom-radio col-3">
                                <input type="radio" class="custom-control-input"  id="status2" v-model="postItem.publicStatus"  value="public" required>
                                <label class="custom-control-label text-muted" for="status2">Public</label>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <button type="button" class="btn btn-primary" @click="savePost"><svg class="icon icon-base"><use xlink:href="#i-paperplane"></use></svg> Save phrase</button>
            </form>
            <br>
            <div v-if="submitStatus === 'succes'" class="alert alert-dismissible alert-success">
                <button type="button" class="close" @click="removeAlert">&times;</button>
                <strong>Great!</strong> You've submitted one more cute message!
            </div>
            <div v-if="submitStatus === 'error'" class="alert alert-dismissible alert-danger">
                <button type="button" class="close" @click="removeAlert">&times;</button>
                <strong>Oh no!</strong> Something went wrong! :( Please, try again.
            </div>
            <br>
        </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        submitStatus: null,
        postItem: {
          userId: null,
          postContent: null,
          createDate: null,
          childName: null,
          childAge: null,
          likes: 0,
          publicStatus: 'privat'
        }
      }
    },
    methods: {
      savePost() {
        this.postItem.createDate = new Date();
        this.$store.commit('addNewPost', this.postItem);
        axios.post('https://children-talk-11.firebaseio.com/posts.json', this.postItem)
          .then(res => {
            console.log(res);
            this.resetForm();
            this.submitStatus = 'succes';
            setTimeout(this.removeAlert, 3000);
        })
          .catch(err => {
            console.log(err);
            this.submitStatus = 'error';
          });
      },
      resetForm() {
          this.postItem.userId = null;
          this.postItem.postContent = null;
          this.postItem.createDate = null;
          this.postItem.childName = null;
          this.postItem.childAge = null;
      },
      removeAlert() {
        this.submitStatus = null;
      }
    },
    computed: {

    }
  }
</script>
