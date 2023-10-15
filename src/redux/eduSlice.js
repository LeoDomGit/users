import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getEdu = createAsyncThunk('education/getEdu' , async ()=>{
    return fetch("https://api.trungthanhweb.com/api/getEducations")
    .then((res)=>res.json());
})
export const eduSlice = createSlice({
    name: 'cates',
    initialState:{
        educations:[],
        loading:false
    },
    extraReducers:{
        [getEdu.pending]: (state,action)=>{
            state.loading=true;
        },
        [getEdu.fulfilled]:(state,action)=>{
            state.loading=false;
            state.educations= action.payload;
            
        },
        [getEdu.rejected]:(state,action)=>{
            state.loading=false;
        }
    }
})
export default eduSlice.reducer