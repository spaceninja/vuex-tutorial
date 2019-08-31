/**
 * State
 *
 * - similar to data
 */
export const state = () => ({
  products: [],
  cart: [], // id, quantity
  checkoutStatus: null
})

/**
 * Getters
 *
 * - similar to computed properties
 * - track their dependencies and automatically update when they change
 * - vuex will automatically pass state as the first parameter
 * - vuex will automatically pass all existing getters as the second parameter
 */
export const getters = {
  availableProducts(state, getters) {
    return state.products.filter((product) => product.inventory > 0)
  },

  cartProducts(state) {
    return state.cart.map((cartItem) => {
      const product = state.products.find(
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
  },

  productIsInStock() {
    return (product) => product.inventory > 0
  }
}

/**
 * Mutations
 *
 * - set and update state
 * - should be as simple as possible
 * - only responsible for updating a piece of state
 * - vuex will automatically pass state as the first parameter
 */
export const mutations = {
  setProducts(state, products) {
    // update products
    state.products = products
  },

  pushProductToCart(state, productId) {
    state.cart.push({
      id: productId,
      quantity: 1
    })
  },

  incrementItemQuantity(state, cartItem) {
    cartItem.quantity++
  },

  decrementProductInventory(state, product) {
    product.inventory--
  },

  setCheckoutStatus(state, status) {
    state.checkoutStatus = status
  },

  emptyCart(state) {
    state.cart = []
  }
}
