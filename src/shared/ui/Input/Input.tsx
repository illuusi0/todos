import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 1rem 3rem;
  font-size: 24px;
  font-family: inherit;
  font-weight: 300;
  color: #4d4d4d;
  border: none;
  background: none;
  box-sizing: border-box;

  &::placeholder {
    color: #e6e6e6;
    font-style: italic;
  }

  &:focus {
    outline: none;
  }
`; 