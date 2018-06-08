<template>
  <p>{{state.error}}</p>
</template>

<script>
  import BasicComponent from './BasicComponent'

  export default {
    name: "ErrorBox",
    extends: BasicComponent
  }
</script>

<style scoped>
  p {
    color: red;
  }
</style>
