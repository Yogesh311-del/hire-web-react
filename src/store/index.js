import { configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk"
import rootReducer from "../reducers";

const store = configureStore({
    reducer: rootReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});

export default store;