<template>
  <div class="center" style="display:inline-block;">
    <slot>
      No slot content defined.
    </slot>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: [
    ]
  }
</script>

<style scoped>
  .center {
    margin: auto;
    border: 1px solid green;
  }
</style>
