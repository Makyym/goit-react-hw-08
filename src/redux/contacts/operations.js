import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const response = await axios.get("contacts");
        return response.data.data.data;
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
        return data.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const editContact = createAsyncThunk("contacts/editContact", async ({_id, name, phoneNumber, contactType}, thunkAPI) => {
    try {
        const response = await axios.patch(`contacts/${_id}`, { name, phoneNumber, contactType });
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});