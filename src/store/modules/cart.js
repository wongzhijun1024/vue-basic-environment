const state = () => ({
  title:"cats list",
  items: [],
})
const getters = {
  cartProducts: (state) => {
    return state.items
  }
} 
const actions = {
  addProductToCart ({ state, commit }, product) {
    console.log(state)
    commit('pushProductToCart',product)
  }
}
const mutations = {
  pushProductToCart (state, product) {
    state.items.push(product)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}