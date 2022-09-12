import contactApi from './api';

export const fetchRegister = credentials =>
  contactApi.post('/users/signup', credentials);

export const fetchLogin = credentials =>
  contactApi.post('/users/login', credentials);

export const fetchLogOut = () => contactApi.post('/users/logout');

export const fetchCurrent = () => contactApi.get('/users/current');
