import axios from 'axios';
import { BASE_URL } from 'constants';

const contactApi = axios.create({
  baseURL: BASE_URL,
});

export const token = {
  set(token) {
    contactApi.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    contactApi.defaults.headers.common.Authorization = '';
  },
};
export default contactApi;
