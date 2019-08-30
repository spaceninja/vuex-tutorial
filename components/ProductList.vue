<template>
  <div>
    <h1>Product List</h1>
    <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif" alt="Loading…" />
    <ul v-else>
      <li v-for="product in availableProducts" :key="product.id">
        {{ product.title }} - {{ product.price }}
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
    this.loading = true
    this.$store.dispatch('fetchProducts').then(() => (this.loading = false))
  }
}
</script>

<style lang="scss" scoped></style>
