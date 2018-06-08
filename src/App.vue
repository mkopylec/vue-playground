<template>
  <div id="app">
    <validated-input label="Some label"/>
    <message-box/>
    <message-refresher/>
    <error-box/>
  </div>
</template>

<script>
  import {store} from "./store/ApplicationStore";
  import ValidatedInput from "./components/ValidatedInput";
  import MessageBox from "./components/MessageBox";
  import MessageRefresher from "./components/MessageRefresher";
  import ErrorBox from "./components/ErrorBox";

  export default {
    name: 'app',
    store,
    components: {ErrorBox, MessageRefresher, MessageBox, ValidatedInput}
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
