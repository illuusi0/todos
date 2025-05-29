import React from 'react';
import styled from 'styled-components';
import type { Todo } from '../../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;
  font-size: 24px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.75rem;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div<{ $checked: boolean }>`
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 1px solid ${props => props.$checked ? '#bddad5' : '#e6e6e6'};
  border-radius: 50%;
  transition: all 0.2s;
  position: relative;
  
  &:after {
    content: '✓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #5dc2af;
    font-size: 16px;
    opacity: ${props => props.$checked ? 1 : 0};
  }

  ${CheckboxContainer}:hover & {
    border-color: ${props => props.$checked ? '#bddad5' : '#b4b4b4'};
  }
`;

const TodoText = styled.span<{ $completed: boolean }>`
  flex: 1;
  color: ${props => props.$completed ? '#d9d9d9' : '#4d4d4d'};
  text-decoration: ${props => props.$completed ? 'line-through' : 'none'};
  transition: color 0.2s;
  font-weight: 300;
`;

const DeleteButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #cc9a9a;
  font-size: 28px;
  cursor: pointer;
  transition: color 0.2s;
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

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <TodoItemContainer data-testid="todo-item">
      <CheckboxContainer>
        <HiddenCheckbox
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          data-testid="todo-checkbox"
        />
        <StyledCheckbox $checked={todo.completed} />
      </CheckboxContainer>
      <TodoText $completed={todo.completed}>{todo.text}</TodoText>
      <DeleteButton
        onClick={() => onDelete(todo.id)}
        data-testid="todo-delete-button"
        aria-label="Delete todo"
      />
    </TodoItemContainer>
  );
};

export default TodoItem; 