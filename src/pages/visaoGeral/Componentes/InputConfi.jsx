import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 33px;
  box-shadow: 4px 10px 20px 0px rgba(0, 0, 0, 0.10);
`;

const StyledInput = styled.input`
  width: 370px;
  height: 50px;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #08632D;
  background: #FDFDFD;
  transition: border-color 0.2s ease-in-out;
  font-size: 16px;
  margin-top: 5px;

  &:focus {
    border-color: #08632D;
    outline: none;
  }

  &:focus + label,
  &:valid + label {
    transform: translateY(-30px);
    font-size: 12px;
    top: 46%;
    background-color: white;
  }

  &:invalid + label {
    transform: translateY(-50%);
    font-size: 14px;
    top: 50%;
    background-color: transparent;
    color: #08632D;
  }

  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset !important;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 10px;
  padding-left: 5px;
  padding-right: 5px;
  top: ${({ hasValue }) => (hasValue ? '-30px' : '50%')};
  transform: translateY(-50%);
  font-size: ${({ hasValue }) => (hasValue ? '12px' : '14px')};
  color: #08632D;
  font-family: Montserrat;
  font-weight: 400;
  transition: transform 0.2s ease-in-out, font-size 0.2s ease-in-out, color 0.2s ease-in-out;
`;
function ConfigInput(props) {
  const hasValue = props.value && props.value.length > 0;

  return (
    <InputContainer>
      <StyledInput
        type={props.type || 'text'}
        id={props.name}
        name={props.name}
        value={props.value || ''}
        onChange={props.onChange}
        required
      />
      <Label htmlFor={props.name} hasValue={hasValue}>
        {props.label}
      </Label>
    </InputContainer>
  );
}

export default ConfigInput;
