import { configureStore } from "@reduxjs/toolkit";
import eduReducer from "./redux/eduSlice";
import courseReducer from "./redux/courseSlice";
export const store = configureStore({
    reducer:{
        educations:eduReducer,
        courses:courseReducer,
    },
});