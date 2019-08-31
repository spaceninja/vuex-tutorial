export default {
  cartProducts(state, getters, rootState) {
    return state.items.map((cartItem) => {
      const product = rootState.products.items.find(
        (product) => product.id === cartItem.id
      )
      return {
        title: product.title,
        price: product.price,
        quantity: cartItem.quantity
      }
    })
  },

  cartTotal(state, getters) {
    return getters.cartProducts.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
  }
}
