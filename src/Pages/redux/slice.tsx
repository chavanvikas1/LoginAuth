import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

import axios from "axios"

// type User={
//     id:number,
//     name:string
// }
type InitialStates={
    loading:boolean,
    user:object,
    error:string
}
const initialState:InitialStates={
    user:{},
    loading:true,
    error:""
}
export const ragister=createAsyncThunk("ragister",async(body:object,{rejectWithValue})=>{
    try {
       const res= await axios.post('https://reqres.in/api/users',body,{
        headers:{'cache-control': 'max-age=14400', 'content-type': 'application/json, charset=utf-8'}
    })
       localStorage.setItem("data", JSON.stringify(res))
       return res
      } catch (error:any) {
       rejectWithValue(error.responese)
      }
 })
 export const login=createAsyncThunk("login",async(body:object,{rejectWithValue})=>{
    //  console.log(body);
   try {
    console.log(body);
    
    const res= await axios.post('https://reqres.in/api/login',body,{
        headers:{'cache-control': 'max-age=14400', 'content-type': 'application/json, charset=utf-8'}})
    console.log(res);
    
    return res
   } catch (error:any) {
     console.log(error);
     
    rejectWithValue(error.responese)
   }
  
 })
const authSlice=createSlice({
    name:"user",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
         builder.addCase(ragister.pending,(state)=>{
            state.loading=true
         })
         builder.addCase(ragister.fulfilled,(state:any,action:PayloadAction<unknown>)=>{
            state.loading=false;
            state.user=action.payload;
         })
         builder.addCase(ragister.rejected,(state:any,action:PayloadAction<unknown>)=>{
            state.loading=true
         })
         builder.addCase(login.pending,(state)=>{
            state.loading=true
         })
         builder.addCase(login.fulfilled,(state:any,action:PayloadAction<unknown>)=>{
            state.loading=false;
            state.user=action.payload;
         })
         builder.addCase(login.rejected,(state:any,action:PayloadAction<unknown>)=>{
            state.loading=true
         })
        
    },

})
export default authSlice.reducer