import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './moduleA'
import moduleB from './moduleB'

Vue.use(Vuex)

const state = {
  count: 1000
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    moduleA,
    moduleB
  }
})

export default store;