const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { item, noOfItems, amount } = action.payload;

        // if quantity zero remove from cart
        if (noOfItems === 0) {
            let filtercart = [...state.cart].filter((pro) => pro.id !== item.productId)

            let totalItems = filtercart.reduce((acc, cur) => {
                acc['sum'] += cur.quantity;
                return acc
            }, { sum: 0 })

            let totalPrice = filtercart.reduce((acc, cur) => {
                acc['sum'] += cur.subTotal;
                return acc
            }, { sum: 0 })

            return {
                ...state,
                total_item: totalItems.sum,
                total_amount: totalPrice.sum,
                cart: filtercart
            }
        }

        // else handle cart quantity
        else {
            let cartProduct;

            cartProduct = {
                id: item.productId,
                url: item.imgUrl,
                name: item.productName,
                price: item.price,
                quantity: noOfItems,
                subTotal: amount
            }

            let filtercart = [...state.cart].filter((item) => item.id !== cartProduct.id)
            filtercart.push(cartProduct)

            let totalItems = filtercart.reduce((acc, cur) => {
                acc['sum'] += cur.quantity;
                return acc
            }, { sum: 0 })

            let totalPrice = filtercart.reduce((acc, cur) => {
                acc['sum'] += cur.subTotal;
                return acc
            }, { sum: 0 })

            return {
                ...state,
                total_item: totalItems.sum,
                total_amount: totalPrice.sum,
                cart: filtercart
            }
        }

    }

    // clear cart
    else if (action.type === "CLEAR_CART") {
        return {
            ...state,
            total_item: '',
            total_amount: '',
            cart: []
        }
    }

    // default return
    return state
}
export default cartReducer;