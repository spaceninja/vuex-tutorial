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
      checkoutStatus: (state) => state.cart.checkoutStatus
    }),
    ...mapGetters({
      products: 'cart/cartProducts',
      total: 'cart/cartTotal'
    })
  },
  methods: {
    ...mapActions({
      checkout: 'cart/checkout'
    })
  }
}
</script>
