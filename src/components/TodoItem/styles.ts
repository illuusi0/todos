import styled from 'styled-components';
import { Button } from '../../shared/ui';

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 24px;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const TodoText = styled.span<{ $completed: boolean }>`
  flex: 1;
  color: ${props => props.$completed ? '#d9d9d9' : '#4d4d4d'};
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  transition: color 0.2s;
  font-weight: 300;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    color: ${props => props.$completed ? '#c0c0c0' : '#2d2d2d'};
  }
`;

export const DeleteButton = styled(Button)`
  display: none;
  color: #cc9a9a;
  font-size: 28px;
  line-height: 20px;
  padding: 0 8px;

  ${TodoItemContainer}:hover & {
    display: block;
  }

  &:hover {
    color: #af5b5e;
  }

  &:after {
    content: '×';
  }
`; 