import { products } from "../data";
export const productReducer = (state, action) => {
  switch (action.type) {
    case "all":
      return { ...state, products };
    case "setDisplayMode":
      return { ...state, displayMode: action.payload };
    case "select":
      const selectedProduct = state.products.find((pd) => {
        return pd.id.toString() === action.payload;
      });
      return { ...state, selectedProduct };
    case "filter":
      let newProducts;
      if (action.payload.search === "") {
        newProducts = products;
      } else {
        newProducts = products.filter((Product) =>
          Product.name.toLowerCase().includes(action.payload.search)
        );
      }
      if (action.payload.selectedItem === "All") {
        newProducts = newProducts;
      } else {
        newProducts = newProducts.filter(
          (Product) => Product.itemType === action.payload.selectedItem
        );
      }
      if (action.payload.selectedCampany != "All") {
        newProducts = newProducts.filter(
          (Product) => Product.camapny === action.payload.selectedCampany
        );
      }
      if (action.payload.selectedColor != "All") {
        newProducts = newProducts.filter((Product) =>
          Product.color.includes(action.payload.selectedColor)
        );
      }
      return { ...state, products: newProducts };
  }
};
