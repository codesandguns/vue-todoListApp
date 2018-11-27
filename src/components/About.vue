<template>
  <div class="about">
    <h1>Hello {{their_name}}, This is an About page</h1>
    <p>Please go through my github repo codesandguns</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      their_name: this.$route.params.name
    };
  }
};
</script>

<style>
</style>
