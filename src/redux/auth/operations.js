import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ``;
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const {data} = await axios.post('/auth/register', credentials);
        console.log(data);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('/auth/login', credentials, { withCredentials: true });
        setAuthHeader(response.data.data.accessToken);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/auth/logout', {}, {withCredentials: true});
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        const response = await axios.post('/auth/refresh', {}, { withCredentials: true });
        setAuthHeader(response.data.data.accessToken);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    };
});