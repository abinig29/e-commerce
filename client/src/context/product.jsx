import React, { useReducer } from "react";
import { products } from "../data";
import { productReducer } from "../reducers/productReducer.js";

export const productContext = React.createContext();
const intialValue = {
  products,
  selectedProduct: null,
  displayMode: "grid"
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, intialValue);
  return (
    <productContext.Provider value={{ ...state, dispatch }}>
      {children}
    </productContext.Provider>
  );
};
