import contactApi from './api';

export const getContacts = () => contactApi.get('/contacts');

export const postContact = contact => contactApi.post('/contacts', contact);

export const removeContact = id => contactApi.delete(`/contacts/${id}`);
