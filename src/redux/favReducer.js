import { createSlice } from '@reduxjs/toolkit'

const initialState={
    clothes:[]
}

export const favReducer=createSlice({
    name:"fav",
    initialState,
    reducers:{
        addToFavorite:(state,action)=>{
           const item = state.clothes.find((item)=>item.id===action.payload.id)
           if(item){
                item.quantity += action.payload.quantity
           }else{
               state.clothes.push(action.payload)
           }
        },
        removeFavoriteItem:(state,action)=>{
         state.clothes=state.clothes.filter((item)=>item.id !== action.payload)
        }
    }
})

export const { addToFavorite, removeFavoriteItem } = favReducer.actions;

export default favReducer.reducer;
