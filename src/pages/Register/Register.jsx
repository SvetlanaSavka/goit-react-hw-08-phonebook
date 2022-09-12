import { useDispatch } from 'react-redux';

import authOperations from 'redux/auth/auth-operations';
import RegisterForm from 'components/Auth/RegisterForm';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.register(values));
    resetForm();
  };

  return <RegisterForm onSubmit={handleSubmit} />;
};

export default Register;
