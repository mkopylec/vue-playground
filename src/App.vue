<template>
  <div id="app">
    <validated-input ref="someInput" label="Some label"/>
    <message-box/>
    <message-refresher v-bind:onButtonClick="displayAlert"/>
    <error-box/>
    <button v-on:click="getUserInput">Get user input</button>
  </div>
</template>

<script>
  import {store} from "./store/ApplicationStore";
  import BasicComponent from './components/BasicComponent'
  import ValidatedInput from "./components/ValidatedInput";
  import MessageBox from "./components/MessageBox";
  import MessageRefresher from "./components/MessageRefresher";
  import ErrorBox from "./components/ErrorBox";

  export default {
    name: 'app',
    extends: BasicComponent,
    store,
    components: {ErrorBox, MessageRefresher, MessageBox, ValidatedInput},
    methods: {
      // Accessing children data using ref
      getUserInput() {
        const message = this.getChildData('someInput').message;
        console.log('User input: ' + message);
      },
      // Function passed to child
      displayAlert() {
        alert('I am a function passed from parent to child');
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
