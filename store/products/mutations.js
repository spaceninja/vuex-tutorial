export default {
  setProducts(state, products) {
    // update products
    state.items = products
  },

  decrementProductInventory(state, product) {
    product.inventory--
  }
}
