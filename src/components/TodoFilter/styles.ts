import styled from 'styled-components';
import { Button } from '../../shared/ui';

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ClearButton = styled(Button)`
  margin-left: 0.5rem;
  font-weight: 300;

  &:hover {
    text-decoration: underline;
  }
`; 