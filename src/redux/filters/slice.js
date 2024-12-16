import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        name: "",
    },
};

const slice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        changeFilter: (state, {payload}) => {
            state.filters.name = payload;
        },
    },
});

export const { changeFilter } = slice.actions;
export const filterReducer = slice.reducer;