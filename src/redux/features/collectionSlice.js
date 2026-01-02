import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    items: JSON.parse(localStorage.getItem("collection")) || []
}

const collectionSlice = createSlice({
    name:"collection",
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExist = state.items.find(
                item => item.id === action.payload.id
            );

            if (!alreadyExist) {
                state.items.push(action.payload);
                localStorage.setItem("collection", JSON.stringify(state.items));     
                toast("Item added successfully");
            }
           
        },

        removeCollection: (state,action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            );
            localStorage.removeItem("collection", JSON.stringify(state.items));   
            toast("Item removed successfully");
        },

        clearCollection: (state) => {
            state.items = [];
            localStorage.removeItem("collection")
            toast("Item cleared successfully");
        }
    }
});


export const {
    addCollection,
    removeCollection,
    clearCollection
 } = collectionSlice.actions;


export default collectionSlice.reducer;