import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const ContactName = styled.p`
  margin-right: 15px;
`;

export const ContactNumber = styled.p`
  margin-right: 40px;
  margin-left: auto;
`;

export const DeleteButton = styled.button`
  height: 26px;
  padding: 5px 10px;
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
