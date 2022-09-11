import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import SharedLayout from 'loyaut/SharedLayout';
import PrivateRoute from 'components/PrivatRout/PrivatRout';
import PublicRoute from 'components/PublicRout/PublicRout';

const Contacts = lazy(() => import('page/Contacts/Contacts'));
const Login = lazy(() => import('page/Login/Login'));
const Register = lazy(() => import('page/Register/Register'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/contacts" component={<Contacts />} />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<Login />}
              />
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute
                restricted
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
};
