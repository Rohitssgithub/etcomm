import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartreducer"

const CartContext = createContext();
const getLocalCartData = () => {
    let localCartData = localStorage.getItem("thapaCart");
    if (localCartData === []) {
        return [];
    } else {
        return JSON.parse(localCartData);
    }
};

const initialState = {
    cart: [],
    // cart: getLocalCartData(),
    total_item: "",
    total_price: "",
    shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const addProductToCart = (id, color, amount, product) => {
        dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } })
    }

    const removeitem = (id) => {
        dispatch({ type: "REMOVE_ITEM", payload: id })
    }

    const setDecrese = (id) => {
        dispatch({ type: "SET_DECREMENT", payload: id })
    }
    const setincrease = (id) => {
        dispatch({ type: "SET_INCREMENT", payload: id });
    }
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }
    useEffect(() => {
        dispatch({ type: "ADD_ITEM_TOTAL" });
        localStorage.setItem("thapaCart", JSON.stringify(state.cart));
    }, [state.cart])

    return (
        <CartContext.Provider value={{ ...state, addProductToCart, removeitem, setDecrese, setincrease, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}


const useCartContext = () => {
    return useContext(CartContext);
};

export { CartProvider, useCartContext };