import shop from '@/api/shop'

export default {
  fetchProducts({ commit }) {
    return new Promise((resolve, reject) => {
      // make the "api" call & run setProducts mutation
      shop.getProducts((products) => {
        commit('setProducts', products)
        resolve()
      })
    })
  }
}
