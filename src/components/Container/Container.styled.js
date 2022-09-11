import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  /* height: 80px;
  text-align: center;
  box-shadow: 10px 5px 5px lightgray; */
  max-width: 1280px;
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Link = styled(NavLink)`
  color: tomato;
  /* margin-left: 30px;
  font-family: serif;
  font-size: 50px;
  :hover {
    color: tomato; */
`;
