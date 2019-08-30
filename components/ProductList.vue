<template>
  <div>
    <h1>Product List</h1>
    <ul>
      <li v-for="product in availableProducts" :key="product.id">
        {{ product.title }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import shop from '@/api/shop'

export default {
  computed: {
    allProducts() {
      return this.$store.state.products
    },
    availableProducts() {
      return this.$store.getters.availableProducts
    }
  },
  created() {
    shop.getProducts((products) => {
      this.$store.commit('setProducts', products)
    })
  }
}
</script>

<style lang="scss" scoped></style>
