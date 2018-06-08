<template>
  <div>
    <button v-on:click="refresh">Refresh message!</button>
    <button v-on:click="onButtonClick">Run event passed from parent!</button>
  </div>
</template>

<script>
  import BasicComponent from './BasicComponent'
  import {HTTP_UPDATE_MESSAGE} from '../store/Actions';

  export default {
    name: 'MessageRefresher',
    extends: BasicComponent,
    props: {
      // Function defined in parent
      onButtonClick: {
        type: Function,
        default: () => {
        }
      },
    },
    methods: {
      refresh() {
        this.dispatch(HTTP_UPDATE_MESSAGE).then(() => console.log('Can chain actions!'))
      },
    }
  }
</script>

<style scoped>

</style>
