import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/CounterSlice'
import authReducer from '../slices/AuthSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    },
})