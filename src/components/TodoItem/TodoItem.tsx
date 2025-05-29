import React from 'react';
import type { Todo } from '../../types/todo';
import { Checkbox } from '../../shared/ui';
import { TodoItemContainer, TodoText, DeleteButton } from './styles';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => onToggle(todo.id);

  return (
    <TodoItemContainer data-testid="todo-item">
      <Checkbox
        checked={todo.completed}
        onChange={handleToggle}
        data-testid="todo-checkbox"
      />
      <TodoText 
        $completed={todo.completed}
        onClick={handleToggle}
        data-testid="todo-text"
      >
        {todo.text}
      </TodoText>
      <DeleteButton
        onClick={() => onDelete(todo.id)}
        data-testid="todo-delete-button"
        aria-label="Delete todo"
      />
    </TodoItemContainer>
  );
};

export default TodoItem; 