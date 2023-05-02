import { useContext } from "react";
import { productContext } from "../context/product";
const useProductContext = () => useContext(productContext);
export default useProductContext;
