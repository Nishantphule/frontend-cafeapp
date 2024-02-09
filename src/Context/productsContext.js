import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/productsReducer'
import { API } from "../global.js"
import { useEffect } from 'react';

const AppContext = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    products: []
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getMenu = () => {
        dispatch({ type: "SET_LOADING" })
        try {
            fetch(`${API}/menu/items`, {
                method: "GET"
            })
                .then((data) => data.json())
                .then((result) => dispatch({ type: "SET_API_DATA", payload: result.items }))
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }

    };

    useEffect(() => getMenu(), []);

    const toggleAmount = (itemId, noOfItems) => {
        dispatch({ type: "TOGGLE_AMOUNT", payload: { itemId, noOfItems, ...state } })
    }


    return (<AppContext.Provider value={{ ...state, toggleAmount }}>{children}</AppContext.Provider>);
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useAppContext };