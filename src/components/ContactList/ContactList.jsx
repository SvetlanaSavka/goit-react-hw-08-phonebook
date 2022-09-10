import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Link, Span } from './ContactList.styled';
import contactSelectors from 'redux/contacts/contact-selectors';
import {
  fetchContacts,
  deleteContact,
} from 'redux/contacts/contacts-operations';

const ContactList = () => {
  const contacts = useSelector(contactSelectors.getContacts);
  const filter = useSelector(contactSelectors.getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const deleteContactId = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {getVisibleContacts().map(({ id, name, number }) => (
        <Link key={id}>
          <Span>{name + ': ' + number}</Span>
          <Button type="button" onClick={() => deleteContactId(id)}>
            Delete
          </Button>
        </Link>
      ))}
    </ul>
  );
};

export default ContactList;
