import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import contactApi from './api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await contactApi.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await contactApi.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    //Todo добавить обработку ошибки
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await contactApi.post('/users/logout');
    token.unset();
  } catch (error) {}
});

export const testregister = async credentials => {
  try {
    const { data } = await contactApi.post('/users/signup', credentials);
    console.log(data);
    return data;
  } catch (error) {}
};
