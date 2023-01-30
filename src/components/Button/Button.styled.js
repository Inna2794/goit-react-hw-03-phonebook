import styled from 'styled-components';

export const LoadMoreButton = styled.button`
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 600;
  margin: 20px auto;
  border-radius: 5px;
  border: none;
  background-color: #eee;
  color: #ff6c00;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #ff6c00;
    color: #eee;
  }
`;
