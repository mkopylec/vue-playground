<template>
  <div>
    <button v-on:click="refresh">Refresh message!</button>
  </div>
</template>

<script>
  import BasicComponent from './BasicComponent'
  import {HTTP_UPDATE_MESSAGE} from '../store/Actions';

  export default {
    name: 'MessageRefresher',
    extends: BasicComponent,
    methods: {
      refresh() {
        this.dispatch(HTTP_UPDATE_MESSAGE).then(() => console.log('Can chain actions!'))
      },
    }
  }
</script>

<style scoped>

</style>
