import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {value : 0},
    reducers: {
        increment: (state)=>{
            state.value += 1;
        }
        ,
        decrement: (state)=>{
            
            let currently = state.value;
            if(currently > 0){
                state.value -= 1;
            }
        }
        ,

        reset: (state)=>{
            state.value = 0;
        }
    }
})

export const {increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer