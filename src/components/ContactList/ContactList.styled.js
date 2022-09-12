import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 18px;
  width: 70px;
  border-radius: 4px;
  background-color: lightblue;
  :hover {
    background-color: lightgrey;
  }
`;

export const Link = styled.li`
  margin-bottom: 15px;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  margin-left: 30px;
  font-family: 'Helvetica';
  padding-right: 200px;
  list-style: none;
`;
export const Span = styled.span`
  margin-right: 30px;
`;
