import { createSlice } from "@reduxjs/toolkit";

const getCartItems = localStorage.getItem("cartItems")

const initialState = {
  cartItems: getCartItems ? JSON.parse(getCartItems) : [],
  total: 0,
  amount: 0
};
// ! remember that what we return inside of a reducer will be the NEW state, so if we return nothing, then that will be the new value of state
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (store, action) => {
      const { cartItemId, amount } = action.payload;
      console.log(store.cartItems);
      const findCartItem = store.cartItems.find(
        (product) => product.cartItemId === cartItemId
      );

      if (findCartItem) {
        store.cartItems = store.cartItems.map((product) => {
          return product.cartItemId === cartItemId
            ? { ...product, amount: product.amount + amount }
            : product;
        });
      } else {
        store.cartItems = [...store.cartItems, action.payload];
      }
    },
  },
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer;
