import { getContacts, postContact, removeContact } from 'api/fetchContact';
import { toast } from 'react-toastify';
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await getContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());
  try {
    const { data } = await postContact(contact);
    toast.success(`${data.name} was added`);
  } catch (error) {
    dispatch(addContactError(error.message));
    toast.error(error.message);
  } finally {
    const response = await getContacts();
    dispatch(addContactSuccess(response.data));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await removeContact(id);
    toast.success('Contact was deleted');
  } catch (error) {
    dispatch(deleteContactError(error.message));
    toast.error(error.message);
  } finally {
    const { data } = await getContacts();
    dispatch(deleteContactSuccess(data));
  }
};
