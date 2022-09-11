import { useSelector } from 'react-redux';
//import { authSelectors } from 'redux/auth';
import {
  getIsLoggedIn,
  getUser,
  getIsRefreshing,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);
  const user = useSelector(getUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
