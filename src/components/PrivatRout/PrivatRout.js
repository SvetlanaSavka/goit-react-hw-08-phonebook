/* import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default function PrivatRout({ children, ...routeProps }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to="/login" />}
    </Route>
  );
}
 */
