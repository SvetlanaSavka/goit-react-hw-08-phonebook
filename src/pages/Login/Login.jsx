import { useDispatch } from 'react-redux';

import authOperations from 'redux/auth/auth-operations';
import LoginForm from 'components/Auth/LoginForm';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(authOperations.logIn(values));

    resetForm();
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default Login;
