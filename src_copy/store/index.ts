import { configureStore } from "@reduxjs/toolkit";
import reducers from './reducer'
import logger from 'redux-logger'

const store = configureStore({
    reducer : reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;