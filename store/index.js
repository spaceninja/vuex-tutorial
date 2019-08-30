// state = data
export const state = () => ({
  products: []
})

// getters = computed properties
export const getters = {
  productsCount() {
    // ...
  }
}

// actions = methods
export const actions = {
  fetchProducts() {
    // make the call
  }
}

// mutations = set and update state
export const mutations = {
  setProducts() {
    // update products
  }
}
