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
        (product) => product._id == action.payload._id
      );
      if (isExist) {
        console.log(isExist);
        state.users = state.users.filter(
          (product) => product._id != action.payload._id
        );
      } else {
        state.users.push(action.payload);
      }
    },

    // removeFromCart: (state, action) => {
    //   state.users = state.users.filter(
    //     (product) => product._id != action.payload._id
    //   );
    // },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
