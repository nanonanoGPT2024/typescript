import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
}


const initialState: CounterState = {
    value: 0,
};


const counterSlice = createSlice({
  name:"counter",
  initialState,
  reducers: {
    increment: (state) => {
        state.value += 1;
    },
    decrement: (state) => {
        state.value -=1;
    },
    reset: (state) => {
        state.value = 0;
    },
  },  
});


export const { increment, decrement, reset} = counterSlice.actions;
export default counterSlice.reducer;



/* 
    penjelasan
    
    createslice     => membuat state + reducer dalam satu tempat
    initialState    => state awal (counter bernilai 0)
    Reducer (increment, decrement reste ) mengubah state dengan cara yang lebih mudah
    counterSlice.action  => export action untuk di gunakan di komponena
    counterSlace.Reducer => export reducer untuk di gunakan di store

*/



