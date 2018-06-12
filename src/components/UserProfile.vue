<template>
  <div class="row-12">
    <br>
    <h2>User profile</h2>
    <p>Your email is: {{ userEmail }}</p>
  </div>

</template>

<script>
  export default {
      computed: {
          userEmail() {
              return this.$store.state.userEmail;
          }
      }
  }
</script>
