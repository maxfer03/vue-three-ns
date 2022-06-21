<template>
  <div class="text-container">
    <slot />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.text-container {
  background: $container-bg;
  padding: 10px 15px;
  border-radius: 5px;
}
</style>