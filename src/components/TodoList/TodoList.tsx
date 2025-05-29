import React from 'react';
import styled from 'styled-components';
import type { Todo } from '../../types/todo';
import TodoItem from '../TodoItem/TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const ListContainer = styled.div`
  background: white;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  color: #b4b4b4;
  font-size: 24px;
  font-weight: 300;
  font-style: italic;
  border-bottom: 1px solid #e6e6e6;
`;

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