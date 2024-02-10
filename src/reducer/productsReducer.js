const ProductReducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            }

        case "SET_API_DATA":
            const getLocalCartData = () => {
                let localCartData = localStorage.getItem("menuItems");
                let finalProducts = [...action.payload].map((product) => {
                    return { ...product, "quantity": 0 }
                })
                if (localCartData) {
                    if (JSON.parse(localCartData).length === 0) {
                        return finalProducts;
                    }
                    else {
                        return JSON.parse(localCartData);
                    }
                }
                else {
                    return finalProducts;
                }
            }

            return {
                ...state,
                isLoading: false,
                products: getLocalCartData()
            }

        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case "TOGGLE_AMOUNT":

            let { products, itemId, noOfItems } = action.payload;

            let updatedProducts = products.map((pro) => {
                if (pro.productId === itemId) {
                    return { ...pro, quantity: noOfItems };
                } else {
                    return pro;
                }
            })

            return {
                ...state,
                products: updatedProducts
            }

        default:
            return state
    }

};

export default ProductReducer;