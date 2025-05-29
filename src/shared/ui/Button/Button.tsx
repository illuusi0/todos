import styled from 'styled-components';

export const Button = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &.selected {
    border: 1px solid rgba(175, 47, 47, 0.2);
  }
`; 