import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import {
  Formcontact,
  ButtononClick,
  ContactFormField,
  Formcontactlabel,
} from './Register.styled';
import authOperations from 'redux/auth/auth-operation';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Formcontact autoComplete="off">
        <Formcontactlabel htmlFor="name">Name</Formcontactlabel>
        <ContactFormField type="tel" name="name" />
        <ErrorMessage name="name" />

        <Formcontactlabel htmlFor="email">Email</Formcontactlabel>
        <ContactFormField type="tel" name="email" />
        <ErrorMessage name="email" />

        <Formcontactlabel htmlFor="user-password">Password</Formcontactlabel>
        <ContactFormField type="text" name="password" id="user-password" />
        <ErrorMessage name="password" />

        <ButtononClick type="submit">SignUp</ButtononClick>
      </Formcontact>
    </Formik>
  );
};

export default Register;
