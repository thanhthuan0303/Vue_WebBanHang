const mutations = {
    setStatus(state, status) {
        state.status = status
    },
    setCart(state, cart) {
        state.cart = cart
    },
    searchValue(state, searchValue) {
        state.searchValue = searchValue
    },
    setProductsAPI(state, products) {
        state.products = products
    },
}

export default mutations
