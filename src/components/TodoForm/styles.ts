import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  border-bottom: 1px solid #e6e6e6;
`;

export const DownArrow = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  color: #e6e6e6;
  font-size: 22px;
  pointer-events: none;
  
  &::before {
    content: '❯';
  }
`; 