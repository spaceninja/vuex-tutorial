import shop from '@/api/shop'

export default {
  addProductToCart({ state, commit, getters, rootGetters }, product) {
    if (rootGetters['products/productIsInStock'](product)) {
      const cartItem = state.items.find((item) => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', product.id)
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      commit('products/decrementProductInventory', product, { root: true })
    }
  },

  checkout({ state, commit }) {
    // make an "api" call to buy, which will succeed or fail
    shop.buyProducts(
      state.items,
      () => {
        commit('emptyCart')
        commit('setCheckoutStatus', 'success')
      },
      () => {
        commit('setCheckoutStatus', 'fail')
      }
    )
  }
}
