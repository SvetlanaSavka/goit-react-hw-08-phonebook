import { Navigation } from './Navigation';
import styled from 'styled-components';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

const StyledHeader = styled.div`
  padding: 20px 0;
  background-color: lightcyan;
`;
export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <StyledHeader>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </StyledHeader>
  );
};
