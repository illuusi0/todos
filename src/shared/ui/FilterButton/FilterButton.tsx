import styled from 'styled-components';
import { Button } from '../Button';

export const FilterButton = styled(Button)<{ $active: boolean }>`
  color: ${props => props.$active ? '#4d4d4d' : '#777'};
  padding: 3px 7px;
  border: 1px solid ${props => props.$active ? '#efd5d5' : 'transparent'};
  border-radius: 3px;
  font-weight: ${props => props.$active ? '400' : '300'};

  &:hover {
    border-color: #efd5d5;
  }
`; 