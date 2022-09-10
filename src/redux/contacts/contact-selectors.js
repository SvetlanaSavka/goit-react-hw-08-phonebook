import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts.contacts;
const getFilter = state => state.contacts.filter;
const getIsLoading = state => state.contacts.isLoading;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactSelectors = {
  getContacts,
  getFilter,
  getIsLoading,
  getVisibleContacts,
};
export default contactSelectors;
