<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="Loading…" />
    <ul v-else>
      <li v-for="product in allProducts" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} -
        {{ product.inventory }}
        <button
          :disabled="!productIsInStock(product)"
          @click="addProductToCart(product)"
        >
          Add to cart
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    ...mapState({
      // inject global state into local state
      allProducts: (state) => state.products.items
    }),
    ...mapGetters({
      // productIsInStock is actually a function stored in a vuex getter
      productIsInStock: 'products/productIsInStock'
    })
  },
  created() {
    // On page load, run the `fetchProducts` action to load products into global state
    this.loading = true
    this.fetchProducts().then(() => (this.loading = false))
  },
  methods: {
    ...mapActions({
      // vuex action to simulate loading products from an api into global state
      fetchProducts: 'products/fetchProducts',
      // vuex action to push a product into the cart in global state
      addProductToCart: 'cart/addProductToCart'
    })
  }
}
</script>
