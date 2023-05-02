export const cartReducer = (state, action) => {
  switch (action.type) {
    case "all":
      return { ...state, cart: action.payload };
    case "add":
      const cart = [...state.cart, action.payload];
      return { ...state, cart };
    case "remove":
      const newCart = state.cart.filter(
        (cartItem) => cartItem.id != action.payload
      );
      return { ...state, cart: newCart };
    case "inc":
      const incCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          const cartAmount = cartItem.amount + 1;
          const cartPrice = cartAmount * cartItem.price;
          const cart = { ...cartItem, amount: cartAmount, subTotal: cartPrice };
          return cart;
        }
        return cartItem;
      });
      return { ...state, cart: incCart };
    case "dec":
      const decCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          const cartAmount = cartItem.amount - 1;
          const cartPrice = cartAmount * cartItem.price;
          const cart = {
            ...cartItem,
            amount: cartAmount,
            subTotal: cartPrice,
          };
          return cart;
        }
        return cartItem;
      });
      return { ...state, cart: decCart };
    case "calTotal":
      const total = state.cart.length;

      return { ...state, total };
  }
};
