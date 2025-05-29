import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background: white;
  }

  /* Вторая карточка */
  &::before {
    left: 4px;
    right: 4px;
    height: 100%;
    bottom: -5px;
    z-index: -1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Третья карточка */
  &::after {
    left: 8px;
    right: 8px;
    height: 100%;
    bottom: -10px;
    z-index: -2;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`; 