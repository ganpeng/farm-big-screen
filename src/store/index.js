import Vue from 'vue';
import Vuex from 'vuex';
import dict from './modules/dict';
import farm from './modules/farm';
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    dict,
    farm
  }
});

export default store
