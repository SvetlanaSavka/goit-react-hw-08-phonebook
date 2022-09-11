import contactApi from './api';

export const fetchRegister = credentials =>
  contactApi.post('/users/signup', credentials);

export const fetchLogin = credentials =>
  contactApi.post('/users/login', credentials);

// export const logIn = createAsyncThunk('auth/login', async credentials => {
//   try {
//     const { data } = await contactApi.post('/users/login', credentials);
//     token.set(data.token);
//     return data;
//   } catch (error) {
//     //Todo добавить обработку ошибки
//   }
// });

// export const logOut = createAsyncThunk('auth/logout', async () => {
//   try {
//     await contactApi.post('/users/logout');
//     token.unset();
//   } catch (error) {}
// });

// export const testregister = async credentials => {
//   try {
//     const { data } = await contactApi.post('/users/signup', credentials);
//     console.log(data);
//     return data;
//   } catch (error) {}
// };
