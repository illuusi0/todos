import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import type { Todo, FilterType } from './types/todo';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import TodoFilter from './components/TodoFilter/TodoFilter';
import TodoCounter from './components/TodoCounter/TodoCounter';

const AppContainer = styled.div`
  max-width: 540px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const AppTitle = styled.h1`
  font-size: 100px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  margin: 2rem 0;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.05em;
`;

const Card = styled.div`
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

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
  color: #777;
  border-top: 1px solid #e6e6e6;
  font-size: 14px;
`;

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  const handleAddTodo = useCallback((text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prev => [...prev, newTodo]);
  }, []);

  const handleToggleTodo = useCallback((id: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const handleDeleteTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const handleClearCompleted = useCallback(() => {
    setTodos(prev => prev.filter(todo => !todo.completed));
  }, []);

  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      default:
        return true;
    }
  });

  const activeCount = todos.filter(todo => !todo.completed).length;
  const hasCompletedTodos = todos.some(todo => todo.completed);

  return (
    <AppContainer>
      <AppTitle>todos</AppTitle>
      <Card>
        <TodoForm onAdd={handleAddTodo} />
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
        {todos.length > 0 && (
          <Footer>
            <TodoCounter activeCount={activeCount} />
            <TodoFilter
              currentFilter={filter}
              onFilterChange={setFilter}
              hasCompletedTodos={hasCompletedTodos}
              onClearCompleted={handleClearCompleted}
            />
          </Footer>
        )}
      </Card>
    </AppContainer>
  );
};

export default App;
