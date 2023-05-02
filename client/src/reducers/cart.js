export const cartReducer = (state, action) => {
  switch (action.type) {
    case "all":
      localStorage.setItem("cartItem", JSON.stringify(state));
      return { ...action.payload };
    case "add":
      const cart = [...state.cart, action.payload];
      localStorage.setItem("cartItem", JSON.stringify({ ...state, cart }));
      return { ...state, cart };
    case "clear":
      localStorage.setItem("cartItem", JSON.stringify({ ...state, cart: [] }));
      return { ...state, cart: [] };
    case "remove":
      const newCart = state.cart.filter(
        (cartItem) => cartItem.id != action.payload
      );
      localStorage.setItem(
        "cartItem",
        JSON.stringify({ ...state, cart: newCart })
      );
      return { ...state, cart: newCart };
    case "inc":
      const incCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          const cartAmount = cartItem.amount + 1;
          const cartPrice = (cartAmount * cartItem.price).toFixed(2);
          const cart = { ...cartItem, amount: cartAmount, subTotal: cartPrice };
          return cart;
        }
        return cartItem;
      });
      localStorage.setItem(
        "cartItem",
        JSON.stringify({ ...state, cart: incCart })
      );
      return { ...state, cart: incCart };
    case "dec":
      const decCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
          const cartAmount = cartItem.amount - 1;
          const cartPrice = (cartAmount * cartItem.price).toFixed(2);
          const cart = {
            ...cartItem,
            amount: cartAmount,
            subTotal: cartPrice,
          };
          return cart;
        }
        return cartItem;
      });
      localStorage.setItem(
        "cartItem",
        JSON.stringify({ ...state, cart: decCart })
      );
      return { ...state, cart: decCart };
    case "calTotal":
      const total = state.cart.length;
      let totalPrice = 0;
      state.cart.forEach((element) => {
        totalPrice += parseFloat(element.subTotal);
      });
      return { ...state, total, totalPrice };
  }
};
