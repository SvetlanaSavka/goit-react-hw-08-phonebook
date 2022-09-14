import React from 'react';
import { useFormik } from 'formik';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

import 'react-phone-input-2/lib/style.css';
import {
  Formcontact,
  ButtononClick,
  ContactFormField,
  Formcontactlabel,
  InputContainer,
  PhoneInputStyled,
} from './ContactForm.styled';
import contactSelectors from 'redux/contacts/contact-selectors';
import { addContact } from 'redux/contacts/contacts-operations';

export const ContactForm = () => {
  const contacts = useSelector(contactSelectors.getContacts);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { number: '', name: '' },
    onSubmit: (values, { resetForm }) => {
      const isAdded = validationData(values);
      if (isAdded) {
        alert(`${values.name} уже добавлен`);
        return;
      }

      const contact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };
      dispatch(addContact(contact));
      resetForm();
    },
  });

  const validationData = data =>
    contacts.find(contact => contact.name === data.name);

  return (
    <Formcontact autoComplete="off" onSubmit={formik.handleSubmit}>
      <InputContainer>
        <Formcontactlabel htmlFor="user-name">Name</Formcontactlabel>
        <ContactFormField
          type="text"
          name="name"
          id="user-name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </InputContainer>
      <InputContainer>
        <Formcontactlabel htmlFor="number">Number</Formcontactlabel>

        <PhoneInputStyled
          name="number"
          formik={formik}
          country={'us'}
          id="number"
          value={formik.values.number}
          onChange={phone => formik.setFieldValue('number', phone)}
        />
      </InputContainer>

      <ButtononClick type="submit">Add contact</ButtononClick>
    </Formcontact>
  );
};

export default ContactForm;
