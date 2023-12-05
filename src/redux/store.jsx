import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './team';


const store = configureStore({
    reducer: {
        cart: cartSlice
    },

});


export default store;
