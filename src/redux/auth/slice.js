import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser } from "./operations";

const initialState = {
    user: {
        name: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const slice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, { payload }) => {
                state.user.name = payload.name;
                state.token = payload.accessToken;
                state.isLoggedIn = true;
            })
            .addCase(logout.fulfilled, () => initialState)
            .addCase(refreshUser.fulfilled, (state, { payload }) => {
                state.user.name = payload.name;
                state.token = payload.accessToken;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            .addCase(refreshUser.pending, (state, { payload }) => {
                state.isRefreshing = true;
            })
            .addCase(refreshUser.rejected, (state, { payload }) => {
                state.isRefreshing = false;
            })
    }
})

export const authReducer = slice.reducer;