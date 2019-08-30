/**
 * State
 *
 * similar to data
 */
export const state = () => ({
  products: []
})

/**
 * Getters
 *
 * similar to computed properties
 */
export const getters = {
  productsCount() {
    // ...
  }
}

/**
 * Actions
 *
 * similar to methods
 * can be complex, but never update the state
 */
export const actions = {
  fetchProducts() {
    // make the call
    // run setProducts mutation
  }
}

/**
 * Mutations
 *
 * set and update state
 * should be as simple as possible
 * only responsible for updating a piece of state
 * vuex will automatically pass state as the first parameter
 */
export const mutations = {
  setProducts(state, products) {
    // update products
    state.products = products
  }
}
