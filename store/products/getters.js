export default {
  productIsInStock() {
    return (product) => product.inventory > 0
  }
}
