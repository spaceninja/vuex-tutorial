import shop from '@/api/shop'

/**
 * Actions
 *
 * - similar to methods
 * - can be complex, but never update the state
 * - responsible for the logic of when a mutation should be fired
 * - vuex will automatically pass the context object as the first parameter
 * - context exposes the same methods and properties as the store object
 */
export default {
  fetchProducts({ commit }) {
    return new Promise((resolve, reject) => {
      // make the "api" call & run setProducts mutation
      shop.getProducts((products) => {
        commit('setProducts', products)
        resolve()
      })
    })
  },

  addProductToCart({ state, commit, getters }, product) {
    if (getters.productIsInStock(product)) {
      const cartItem = state.cart.find((item) => item.id === product.id)
      if (!cartItem) {
        commit('pushProductToCart', product.id)
      } else {
        commit('incrementItemQuantity', cartItem)
      }
      commit('decrementProductInventory', product)
    }
  },

  checkout({ state, commit }) {
    // make an "api" call to buy, which will succeed or fail
    shop.buyProducts(
      state.cart,
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
