import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operation';
import { useAuth } from 'hooks/useAuth';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding: 4px 18px;
  width: 120px;
  border-radius: 4px;
  background-color: lightblue;
  :hover {
    background-color: lightgrey;
  }
`;
const Span = styled.li`
  font-size: 18px;
  text-decoration: none;
  font-weight: 700;
  transition-duration: 500ms;
  color: purple;
  list-style: none;
  &:not(:last-child) {
    margin-right: 60px;
  }
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <Span>Добро пожаловать, {user.name}!</Span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </Button>
    </div>
  );
};
