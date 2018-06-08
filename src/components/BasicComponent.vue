<template>

</template>

<script>
  export default {
    name: "BasicComponent",
    computed: {
      state() {
        return this.$store.state
      },
      getters() {
        return this.$store.getters
      }
    },
    methods: {
      dispatch(action, parameter) {
        return this.$store.dispatch(action, parameter)
      }
    }
  }
</script>

<style scoped>

</style>
