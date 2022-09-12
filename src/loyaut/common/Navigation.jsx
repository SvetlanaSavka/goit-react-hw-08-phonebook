import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';
import { useAuth } from 'hooks/useAuth';

const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  color: lightblue;
  font-weight: 700;
  transition-duration: 500ms;
  list-style: none;
  &:not(:last-child) {
    margin-right: 20px;
  }
  &.active {
    color: purple;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      {isLoggedIn ? (
        <StyledNavLink to="/contacts">PhoneBook</StyledNavLink>
      ) : (
        <>
          <StyledNavLink to="/login">Login</StyledNavLink>
          <StyledNavLink to="/register">Register</StyledNavLink>
        </>
      )}
    </nav>
  );
};
