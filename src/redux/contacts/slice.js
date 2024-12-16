import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout } from "../auth/operations";

const initialState = {
    contacts: {
        items: [],
        loading: false,
        error: null
    },
};


const handlePending = state => {
    state.contacts.loading = true;
};

const handleRejected = (state, { payload }) => {
    state.contacts.loading = false;
    state.error = payload;
}

const slice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, handlePending)

            .addCase(fetchContacts.fulfilled, (state, {payload}) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items = payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)

            .addCase(addContact.fulfilled, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items.push(payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)

            .addCase(deleteContact.fulfilled, (state, { payload }) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items = state.contacts.items.filter(item => item.id !== payload);
            })

            .addCase(deleteContact.rejected, handleRejected)
            .addCase(logout.fulfilled, () => initialState)
    }
});

export const contactsReducer = slice.reducer;