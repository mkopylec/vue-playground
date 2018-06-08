<template>
  <div>
    <p>{{state.message}}</p>
    <p>{{getters.messageWithPrefix}}</p>
  </div>
</template>

<script>
  import BasicComponent from './BasicComponent'

  export default {
    name: 'MessageBox',
    extends: BasicComponent
  }
</script>

<style scoped>

</style>
