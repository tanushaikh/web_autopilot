import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "login",
}

export const AuthSlice = createSlice({
    name: 'Auth',
    initialState,
    reducers: {
        handleAuth: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { handleAuth } = AuthSlice.actions

export default AuthSlice.reducer