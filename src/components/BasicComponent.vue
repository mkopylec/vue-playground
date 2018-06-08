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
      },
      getChildData(ref) {
        return this.$refs[ref].$data
      }
    }
  }
</script>

<style scoped>

</style>
