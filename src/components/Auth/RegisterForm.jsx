import { Formik, ErrorMessage } from 'formik';
//import { useDispatch } from 'react-redux';

import {
  Formcontact,
  ButtononClick,
  ContactFormField,
  Formcontactlabel,
} from './common/Register.styled';
//import authOperations from 'redux/auth/auth-operations';

export const RegisterForm = ({ onSubmit }) => {
  /* const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.register(values));
    resetForm();
  };
 */
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={onSubmit}
    >
      <Formcontact autoComplete="off">
        <Formcontactlabel htmlFor="name">Name</Formcontactlabel>
        <ContactFormField type="tel" name="name" />
        <ErrorMessage name="name" />

        <Formcontactlabel htmlFor="email">Email</Formcontactlabel>
        <ContactFormField type="tel" name="email" />
        <ErrorMessage name="email" />

        <Formcontactlabel htmlFor="user-password">Password</Formcontactlabel>
        <ContactFormField type="password" name="password" id="user-password" />
        <ErrorMessage name="password" />

        <ButtononClick type="submit">SignUp</ButtononClick>
      </Formcontact>
    </Formik>
  );
};

export default RegisterForm;
