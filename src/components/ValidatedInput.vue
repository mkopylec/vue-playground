<template>
  <div>
    <label for="user-text">{{label}}</label>
    <input id="user-text" v-model="message"/>
    <p>{{message}}</p>
  </div>
</template>

<script>
  export default {
    name: 'ValidatedInput',
    props: {
      label: {
        type: String,
        default: 'Enter message'
      },
    },
    data() {
      return {
        message: 'Enter message'
      }
    },
  }
</script>

<style scoped>

</style>
