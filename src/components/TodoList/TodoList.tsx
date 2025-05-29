import React from 'react';
import type { Todo } from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem';
import { ListContainer, EmptyMessage } from './styles';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  if (todos.length === 0) {
    return (
      <ListContainer data-testid="todo-list">
        <EmptyMessage>No todos yet. Add one above!</EmptyMessage>
      </ListContainer>
    );
  }

  return (
    <ListContainer data-testid="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ListContainer>
  );
};

export default TodoList; 