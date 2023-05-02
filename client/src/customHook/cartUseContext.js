import { useContext } from "react";
import { cartContext } from "../context/cart";
const useCartContext = () => useContext(cartContext);
export default useCartContext;
