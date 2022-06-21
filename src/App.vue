<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/projects">Projects</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  

  padding: 0px auto;

  padding: 0px 2vw;

  @include desktop {
    padding: 0px 10vw;
  }
}

#nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: $text-color;

    &.router-link-exact-active {
      color: $active-link;
    }
  }
}
</style>
