import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./Context/Productcontext";
import { FilterContextProvider } from "./Context/FilterContext"
import { CartProvider } from "./Context/cartcontext"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <AppProvider>
        <FilterContextProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterContextProvider>
    </AppProvider>);

reportWebVitals();
