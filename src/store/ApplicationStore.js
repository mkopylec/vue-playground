import Vue from 'vue';
import Vuex from 'vuex';
import {http} from "../http/HttpClient";
import {RESET_ERROR, SET_ERROR, SET_MESSAGE} from "./Mutations";
import {HTTP_UPDATE_MESSAGE} from "./Actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    message: 'N/A',
    error: ''
  },
  getters: {
    messageWithPrefix: state => {
      return 'Prefixed ' + state.message;
    }
  },
  // Called by components
  actions: {
    [HTTP_UPDATE_MESSAGE](context, parameter) {
      this.commit(RESET_ERROR);
      return http.getMessage()
        .then(response => context.commit(SET_MESSAGE, `Message from HTTP backend: ${response.data.message} and parameter is: ${parameter}`))
        .catch(e => context.commit(SET_ERROR, `Error while getting message from backend: ${e}`));
    },
  },
  // Must be synchronous, treat as setters
  mutations: {
    [SET_MESSAGE](state, message) {
      state.message = message;
    },
    [SET_ERROR](state, error) {
      state.error = error;
    },
    [RESET_ERROR](state) {
      state.error = '';
    }
  }
});
