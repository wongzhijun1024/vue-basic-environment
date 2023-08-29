// initial state
const state = () => ({
  title:"Products name",
  all: [{id:0,title:"product0",inventory:10},{id:1,title:"product1",inventory:10},{id:2,title:"product2",inventory:10}]
})

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}