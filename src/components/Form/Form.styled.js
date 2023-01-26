import styled from 'styled-components';

export const TheForm = styled.form`
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ff6c00;
  border-radius: 16px;
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Input = styled.input`
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 5px;
  border: 1px solid #888;
  border-radius: 5px;

  &:focus-visible {
    outline: 1px solid #ff6c00;
    border: 1px solid #fff;
  }
`;

export const SubmitBtn = styled.button`
  width: 120px;
  padding: 5px 10px;
  margin-left: auto;
  margin-right: auto;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  background-color: #fff;
  color: #ff6c00;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #ff6c00;
    color: #eee;
  }
`;
