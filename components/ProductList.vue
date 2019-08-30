<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="Loading…" />
    <ul v-else>
      <li v-for="product in availableProducts" :key="product.id">
        {{ product.title }} - {{ product.price | currency }} -
        {{ product.inventory }}
        <button @click="addProductToCart(product)">Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    allProducts() {
      return this.$store.state.products
    },
    availableProducts() {
      return this.$store.getters.availableProducts
    }
  },
  created() {
    // show the spinner
    this.loading = true
    this.$store
      // call the `fetchProducts` action to load products into state
      .dispatch('fetchProducts')
      // when the promise returns, hide the spinner
      .then(() => (this.loading = false))
  },
  methods: {
    addProductToCart(product) {
      this.$store.dispatch('addProductToCart', product)
    }
  }
}
</script>
