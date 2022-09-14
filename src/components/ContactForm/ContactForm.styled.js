import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';

export const Formcontact = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 470px;
  border-radius: 2px;
  margin-bottom: 6px;
`;

export const Formcontactlabel = styled.label`
  display: inline-block;
  margin-left: 20px;
  font-size: 14px;
  font-family: sans-serif;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primaryShade2};
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

export const ContactFormField = styled.input`
  color: darkblue;
  font-size: 16px;
  margin-left: 10px;
  background: #ffffff;
  border: 1px solid #cacaca;
  border-radius: 5px;
  line-height: 25px;
  height: 35px;
  width: 295px;
  outline: none;
`;

export const InputContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  align-items: center;
`;

export const PhoneInputStyled = styled(PhoneInput)`
  width: 300px !important;
`;
