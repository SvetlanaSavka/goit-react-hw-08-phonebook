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
    console.log(values);
    dispatch(authOperations.logIn(values));

    resetForm();
  };

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      <Formcontact autoComplete="off">
        <Formcontactlabel htmlFor="email">Email</Formcontactlabel>
        <ContactFormField type="text" name="email" />
        <ErrorMessage name="email" />

        <Formcontactlabel htmlFor="password">Password</Formcontactlabel>
        <ContactFormField type="tel" name="password" />
        <ErrorMessage name="password" />

        <ButtononClick type="submit">Login</ButtononClick>
      </Formcontact>
    </Formik>
  );
};

export default Login;
