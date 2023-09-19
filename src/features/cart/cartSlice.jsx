import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"

const getCartItems = localStorage.getItem("cartItems")

const initialState = {
  cartItems: getCartItems ? JSON.parse(getCartItems) : [],
  prices: {
    total: 0,
    amount: 0,
    shipping: 500,
    tax: 0,
    orderTotal: 0
  }
  
};

export const fetchCartItems = createAsyncThunk("cart/fetchCartItems", async (_, thunkAPI) => {
  try {
    const {data} = await customFetch("/cart")
    return data
  } catch (error) {
    console.log(error);
  }
  
})

// ! remember that what we return inside of a reducer will be the NEW state, so if we return nothing, then that will be the new state value
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
    removeCartItem: (store, action) => {
      const cartItemId = action.payload

      store.cartItems = store.cartItems.filter(item => {
        return item.cartItemId !== cartItemId
      })
      toast.error("Item removed from cart")
    },
    updateCartItemAmount: (store, action) => {
      const {id, amount} = action.payload
      console.log(amount);
      store.cartItems = store.cartItems.map(item => {
          
        return id === item.cartItemId ? {...item, amount,  optionsAmount: amount + 5} : item
      })
      toast.success("Cart updated")
    },
    updateTotalAmount: (store) => {
      const {total, amount} = store.cartItems.reduce((accu, currItem) => {
        accu.total += parseInt(currItem.price) * currItem.amount
        accu.amount += currItem.amount
        
        return accu
      }, {total: 0, amount: 0})
      store.prices.total = total;
      store.prices.amount = amount;
      store.prices.tax = total / 10
      store.prices.orderTotal = store.prices.shipping + total + total / 10
    }
  },
  extraReducers: (store, action) => {
    

    return
  }
});

export const { addCartItem, removeCartItem, updateCartItemAmount, updateTotalAmount} = cartSlice.actions;
export default cartSlice.reducer;
