import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice.js"
import rootReducer from "./routeRuducer.js";
import { authApi } from "@/features/api/authApi.js";
import { courseApi } from "@/features/api/courseApi.js";

export const appStore =configureStore({
    reducer: rootReducer,
    middleware:(defaultMiddleware)=> defaultMiddleware().concat(authApi.middleware,courseApi.middleware)
});

const initializeApp = async () =>{
    await appStore.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}));
}

initializeApp();