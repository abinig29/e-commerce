import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductProvider } from './context/product.jsx'
import { CartProvider } from './context/cart.jsx'


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);
