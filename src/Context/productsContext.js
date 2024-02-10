import { createContext, useContext, useReducer } from "react";
import reducer from '../reducer/productsReducer'
import { API } from "../global.js"
import { useEffect } from 'react';

const AppContext = createContext();

const getLocalMenuData = () => {
    let localMenudata = localStorage.getItem("menuItems");
    if (localMenudata) {
        if (JSON.parse(localMenudata).length === 0) {
            return [];
        }
        else {
            return JSON.parse(localMenudata);
        }
    }
    else {
        return []
    }
}

const initialState = {
    isLoading: false,
    isError: false,
    products: getLocalMenuData()
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

    // add data to local storage
    useEffect(() => {
        localStorage.setItem("menuItems", JSON.stringify(state.products))
    }, [state.products])

    return (<AppContext.Provider value={{ ...state, toggleAmount }}>{children}</AppContext.Provider>);
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useAppContext };