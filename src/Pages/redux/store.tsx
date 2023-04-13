import {configureStore} from "@reduxjs/toolkit"
import slice from "./slice"
// import authSlice from "./redux/authSlice"

const store=configureStore({
    reducer:{
  auth:slice
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store 