import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getCourse = createAsyncThunk('courses/getCourse' , async ()=>{
    return fetch("https://api.trungthanhweb.com/api/allcourses")
    .then((res)=>res.json());
})
export const courseSlice = createSlice({
    name: 'courses',
    initialState:{
        courses:[],
        loadingCourse:false
    },
    extraReducers:{
        [getCourse.pending]: (state,action)=>{
            state.loadingCourse=true;
        },
        [getCourse.fulfilled]:(state,action)=>{
            state.loadingCourse=false;
            state.courses= action.payload;
            
        },
        [getCourse.rejected]:(state,action)=>{
            state.loading=false;
        }
    }
})
export default courseSlice.reducer