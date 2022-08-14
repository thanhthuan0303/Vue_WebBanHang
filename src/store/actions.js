const actions = {
    updateStatus({ commit }, data) {
        console.log('vào', data)
        commit('setStatus', 'Vuex action')
    },
    updateCart({ commit, getters }, data) {
        const { cart } = getters
        switch (data.action) {
            case 'ADD_TO_CART':
                var newData = {
                    ...data.value,
                    quantily: 1,
                }
                var isAdd = cart.find(item =>
                    item.id == data.value.id ? (item.quantily += 1) : ''
                )
                isAdd ? '' : cart.push(newData)
                commit('setCart', cart)
                break
            case 'PLUS_PRODUCT':
                console.log('vào PLUS_PRODUCT')
                cart.find(item =>
                    item.id == data.value ? (item.quantily += 1) : ''
                )
                commit('setCart', cart)
                break
            case 'MINUS_PRODUCT':
                console.log('vào MINUS_PRODUCT')
                cart.find(item => {
                    if (item.id == data.value) {
                        if (item.quantily > 1) {
                            item.quantily -= 1
                            commit('setCart', cart)
                        } else {
                            const newArr = cart.filter(
                                item => item.id !== data.value
                            )
                            commit('setCart', newArr)
                        }
                    }
                })
                break
            case 'DELETE_PRODUCT':
                cart.find(item => {
                    if (item.id == data.value) {
                        const newArr = cart.filter(
                            item => item.id !== data.value
                        )
                        commit('setCart', newArr)
                    }
                })
                break

            default:
                console.log('Action not allowed')
                break
        }
    },
    changesFilterValue({ commit }, data) {
        console.log('vào', data)
        commit('searchValue', data)
    },
}

export default actions
