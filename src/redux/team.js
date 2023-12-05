import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.users.find(
        (user) => user._id === action.payload._id
      );

      console.log(isExist);

      if (!isExist) {
        state.users.push(action.payload);
      } else {
        console.log(isExist);
        state.users = state.users.filter(
          (user) => user._id !== action.payload._id
        );
      }
    },

    // removeFromCart: (state, action) => {
    //   state.users = state.users.filter(
    //     (user) => user._id != action.payload._id
    //   );
    // },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
