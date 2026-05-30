import { createAsyncThunk , createSlice} from "@reduxjs/toolkit";
const registerApi=createAsyncThunk(
    async()=>{
        const res=await("")
        return res.data;
})
const RegisterSlice=createSlice(
 {
    name:"register",
    initialState:{
        users:[],
        error:null,
        loading:false,
    },
    extraReducers:(builder)=>{
        builder
       .addCase( registerApi.fulfilled, (state, action)=>{
        state.users=action.payload;
        state.loading=false
       })
       .addCase(registerApi.pending,(state)=>{
        state.loading=true
       })
       .addCase(registerApi.rejected,(state, action)=>{
        state.error=action.error.message
       })
    }
 }
)
export default RegisterSlice.reducer