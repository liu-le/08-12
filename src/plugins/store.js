import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

import state from '../store/state';
import actions from '../store/actions';
import mutations from '../store/mutations';
import getters from '../store/getters';
// console.log(Vuex)

let store = new Vuex.Store({
    state, mutations, getters, actions,
    
});
export default store;