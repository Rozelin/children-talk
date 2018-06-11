<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Children Talk</a>
    <button class="navbar-toggler collapsed" type="button">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse">
      <ul class="navbar-nav mr-auto">
        <router-link tag="li" class="nav-item" to="/"><a class="nav-link">Home</a></router-link>
        <router-link tag="li" class="nav-item" to="/about"><a class="nav-link">About</a></router-link>
        <router-link tag="li" class="nav-item" to="/profile"><a class="nav-link">Profile</a></router-link>
        <router-link tag="li" class="nav-item" to="/addPhrase"><a class="nav-link">Add New</a> <svg class="i-search"><use xlink:href="#i-pen"></use></svg> </router-link>

      </ul>
    </div>
  </nav>
</template>
<script>
  export default {}
</script>

<style>
  [class^="i-"], [class*="i-"] {
      height: 32px;
      width: 32px;
      display: inline-block;
      fill: currentColor;
  }
</style>
