import React from 'react';
import styled from 'styled-components';

interface TodoCounterProps {
  activeCount: number;
}

const CounterText = styled.div`
  color: #666;
  font-size: 14px;
`;

export const TodoCounter: React.FC<TodoCounterProps> = ({ activeCount }) => {
  return (
    <CounterText data-testid="todo-counter">
      {activeCount} {activeCount === 1 ? 'item' : 'items'} left
    </CounterText>
  );
};

export default TodoCounter; 