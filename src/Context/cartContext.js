import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'

const CartContext = createContext();

// get the previous data from local storage if available
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("cartItems");
    if (localCartData) {
        if (JSON.parse(localCartData).length === 0) {
            return [];
        }
        else {
            return JSON.parse(localCartData);
        }
    }
    else {
        return [];
    }
}

const getLocalAmount = () => {
    let localCartData = localStorage.getItem("cartItems");
    if (localCartData) {
        if (JSON.parse(localCartData).length === 0) {
            return '';
        }
        else {
            let data = JSON.parse(localCartData);
            let totalPrice = data.reduce((acc, cur) => {
                acc['sum'] += cur.subTotal;
                return acc
            }, { sum: 0 })
            return totalPrice.sum;
        }
    }
    else {
        return '';
    }
}

const getLocalItems = () => {
    let localCartData = localStorage.getItem("cartItems");
    if (localCartData) {
        if (JSON.parse(localCartData).length === 0) {
            return '';
        }
        else {
            let data = JSON.parse(localCartData);
            let totalItems = data.reduce((acc, cur) => {
                acc['sum'] += cur.quantity;
                return acc
            }, { sum: 0 })
            return totalItems.sum;
        }
    }
    else {
        return '';
    }
}

const initialState = {
    cart: getLocalCartData(),
    total_item: getLocalItems(),
    total_amount: getLocalAmount(),
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // function to handle quantity and add to cart
    const addToCart = (item, noOfItems, amount) => {
        dispatch({ type: "ADD_TO_CART", payload: { item, noOfItems, amount } })
    }

    // clear cart 
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    // add data to local storage
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(state.cart))
    }, [state.cart])


    return (<CartContext.Provider value={{ ...state, addToCart, clearCart }}>{children}</CartContext.Provider>);
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext };