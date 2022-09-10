import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
//import { lazy } from 'react';
import SharedLayout from 'loyaut/SharedLayout';

/* const Login = lazy(() => import('components/Login/Login'));
const Register = lazy(() => import('components/Register/Register')); */

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route path="/contacts" element={<div>Contacts</div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> */}
        </Route>
      </Routes>

      <ToastContainer />
    </>
  );
};

//<PrivetRout path="/contacts"><Contacts/></PrivetRout>;
//<PublicRout></PublicRout>;
