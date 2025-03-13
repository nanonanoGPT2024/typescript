import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/CounterSlice"

export const store = configureStore({
    reducer : {
        counter: counterReducer,
    },
});



//  tipe untuk state dan dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;




/*
    penjelasan

    configureStore => membuat redux store dengan cara yang lebih simple
    conterReducer  => reducer yang nanti kita buat untuk counter
    RootState      => tipe unutk seluruh di store
    AppDispatch    => tipe untuk dispatch action

    

*/