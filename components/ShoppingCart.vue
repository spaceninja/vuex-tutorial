<template>
  <div>
    <h1>Shopping Cart</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} -
        {{ product.quantity }}
      </li>
    </ul>
    <p><strong>Total:</strong> {{ total | currency }}</p>
    <button @click="checkout">Checkout</button>
    <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      // status message set when checkout completes
      checkoutStatus: (state) => state.cart.checkoutStatus
    }),
    ...mapGetters({
      // sync the products in the cart in global state into local state
      products: 'cart/cartProducts',
      // calculate the total cost of items in the cart
      total: 'cart/cartTotal'
    })
  },
  methods: {
    ...mapActions({
      // vuex action to simulate an api call to process a sale
      checkout: 'cart/checkout'
    })
  }
}
</script>
