import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import {
  Formcontact,
  ButtononClick,
  ContactFormField,
  Formcontactlabel,
} from './Login.styled';
import authOperations from 'redux/auth/auth-operation';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.logIn(values));
    resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Formcontact autoComplete="off">
        <Formcontactlabel htmlFor="user-password">Password</Formcontactlabel>
        <ContactFormField type="text" name="password" id="user-password" />
        <ErrorMessage name="password" />

        <Formcontactlabel htmlFor="email">Email</Formcontactlabel>
        <ContactFormField type="tel" name="email" />
        <ErrorMessage name="email" />

        <ButtononClick type="submit">Login</ButtononClick>
      </Formcontact>
    </Formik>
  );
};

export default Login;
