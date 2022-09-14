import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
//import { Outlet } from 'react-router-dom';
//import SharedLayout from 'layout/SharedLayout';
import authOperations from 'redux/auth/auth-operations';
import { getIsRefreshing } from 'redux/auth/auth-selectors';

import PrivateRoute from 'routes/PrivateRoute';
import PublicRoute from 'routes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const SharedLayout = lazy(() => import('layout/SharedLayout'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div>Refreshing</div>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
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
    </Suspense>
  );
};
