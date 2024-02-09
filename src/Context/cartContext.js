import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/cartReducer'

const CartContext = createContext();

const initialState = {
    cart: [],
    total_item: 0,
    total_amount: 0
}

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (item, noOfItems, amount) => {
        dispatch({ type: "ADD_TO_CART", payload: { item, noOfItems, amount } })
    }

    return (<CartContext.Provider value={{ ...state, addToCart }}>{children}</CartContext.Provider>);
}

const useCartContext = () => {
    return useContext(CartContext)
}

export { CartProvider, useCartContext };