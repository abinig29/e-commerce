import React, { useEffect, useReducer } from "react";
import { cartReducer } from "../reducers/cart";
import { json } from "react-router-dom";

export const cartContext = React.createContext();
const intialValue = {
    cart: [],
    total: 0,
    totalPrice: 0
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, intialValue);

    useEffect(() => {
        const cartItem = JSON.parse(localStorage.getItem("cartItem"))
        if (cartItem) {
            dispatch({ type: "all", payload: cartItem })
        }
    }, [])
    useEffect(() => {
        dispatch({ type: "calTotal" })
    }, [state.cart])
    return (
        <cartContext.Provider value={{ ...state, dispatch }}>
            {children}
        </cartContext.Provider>
    );
};