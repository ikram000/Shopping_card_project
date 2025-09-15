import { createSlice } from "@reduxjs/toolkit";
import reducer from "../counterSlice";

export const cardSlice = createSlice({
 name:'card',
 initialState:{
    items:[],
    totalprice:0,
 },
 reducers:{
addToCard:(state,action)=>{
    const newItem = action.payload;
    state.items.push(newItem);
    state.totalprice += newItem.price
},
clearCard:(state)=>{
    state.items=[],
    state.totalprice=0
}
 }
})
    
export const selectCardItem=(state)=>state.card.items

export const selectCardTotalPrice=(state)=>state.card.totalprice
export const {addToCard,clearCard} =cardSlice.actions

export default cardSlice.reducer
