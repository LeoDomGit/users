import { configureStore } from "@reduxjs/toolkit";
import eduReducer from "./redux/eduSlice";
export const store = configureStore({
    reducer:{
        educations:eduReducer,

    },
});