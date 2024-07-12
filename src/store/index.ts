import { configureStore } from "@reduxjs/toolkit";
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";
import reducers from './reducer'
import logger from 'redux-logger'

const store = configureStore({
    reducer : reducers,
    // devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export const useSelector = useReduxSelector;
export const useDispatch = () => useReduxDispatch();

export default store;