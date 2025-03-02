import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("contacts");
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async (body, thunkAPI) => {
    try {
        const response = await axios.post("contacts", body);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async (contactId, thunkAPI) => {
    try {
        const { data } = await axios.delete(`contacts/${contactId}`);
        return data.id;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const editContact = createAsyncThunk("contacts/editContact", async ({id, name, number}, thunkAPI) => {
    try {
        const response = await axios.patch(`contacts/${id}`, { name, number });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});