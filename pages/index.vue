<template>
  <div class="container">
    <!--
      Note: no need to pass props for products or cart state,
      since the components can access the vuex store directly!
    -->
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from '~/components/ProductList.vue'
import ShoppingCart from '~/components/ShoppingCart.vue'

export default {
  components: {
    ProductList,
    ShoppingCart
  }
}
</script>
