import React from 'react';
//import { useDispatch } from 'react-redux';
//import { useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
//import { fetchContacts } from 'redux/contacts/contacts-operations';

const Contacts = () => {
  //const dispatch = useDispatch();

  /* useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]); */

  return (
    <>
      <ContactForm />
      <ContactList />
    </>
  );
};
export default Contacts;
