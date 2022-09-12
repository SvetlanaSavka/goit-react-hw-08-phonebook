import { Formik, ErrorMessage } from 'formik';
//import { useDispatch } from 'react-redux';
import {
  Formcontact,
  ButtononClick,
  ContactFormField,
  Formcontactlabel,
} from './common/Register.styled';

//import authOperations from 'redux/auth/auth-operations';

const LoginForm = ({ onSubmit }) => {
  /*  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(authOperations.logIn(values));

    resetForm();
  }; */

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={onSubmit}>
      <Formcontact autoComplete="off">
        <Formcontactlabel htmlFor="email">Email</Formcontactlabel>
        <ContactFormField type="text" name="email" />
        <ErrorMessage name="email" />

        <Formcontactlabel htmlFor="password">Password</Formcontactlabel>
        <ContactFormField type="password" name="password" />
        <ErrorMessage name="password" />

        <ButtononClick type="submit">Login</ButtononClick>
      </Formcontact>
    </Formik>
  );
};

export default LoginForm;
