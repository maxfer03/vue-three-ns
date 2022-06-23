<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/projects">Projects</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  position: relative;
  padding: 0px auto;
  padding: 0px 2vw;
  z-index: 2;
  pointer-events: none;
  @include desktop {
    padding: 0px 10vw;
  }
}

#nav {
  padding: 30px;
  text-align: center;
  @include child-events-on();
  a {
    font-weight: bold;
    color: $text-color;

    &.router-link-exact-active {
      color: $active-link;
    }
  }
}
</style>
