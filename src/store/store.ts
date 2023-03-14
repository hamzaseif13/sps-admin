import { configureStore } from "@reduxjs/toolkit";
import addZoneReducer from "../features/addZone/addZoneSlice";
export const store = configureStore({
    reducer:{
        addZoneReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>