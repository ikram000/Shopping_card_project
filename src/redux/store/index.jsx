import { configureStore } from "@reduxjs/toolkit";
import counterSlice from '../counterSlice'
import { cardSlice } from "../cardSlice";
export const store = configureStore({
    reducer: {
        counter: counterSlice,
        card: cardSlice
    }


})

