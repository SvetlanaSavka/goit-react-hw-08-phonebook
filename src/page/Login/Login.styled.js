import styled from 'styled-components';
import { Form, Field } from 'formik';

export const Formcontact = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 470px;
  border-radius: 2px;
  margin-bottom: 6px;
  :hover {
    background-color: lightgrey;
  }
`;

export const Formcontactlabel = styled.label`
  display: inline-block;
  margin-left: 20px;
  font-size: 14px;
  font-family: sans-serif;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryShade2};

  /* :focus {
    background-color: ${({ theme }) => theme.colors.primaryShade2};
  } */
`;

export const ButtononClick = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  margin-top: 20px;
  padding: 4px 18px;
  width: 120px;
  border-radius: 4px;
  background-color: lightblue;
  :hover {
    background-color: lightgrey;
  }
`;

export const ContactFormField = styled(Field)`
  margin-left: 20px;
  display: inline-block;
  border-width: 2px;
  border-radius: 4px;
  height: 26px;
`;

/* export const Formcontact = styled(Form)`
  width: 500px;
  margin: 0 auto;
`;
export const ButtononClick = styled.button`
  width: 100%;
`; */
