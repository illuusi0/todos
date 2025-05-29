import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../../components/TodoList/TodoList';
import type { Todo } from '../../types/todo';

describe('TodoList', () => {
  const mockTodos: Todo[] = [
    {
      id: '1',
      text: 'Test todo 1',
      completed: false,
      createdAt: new Date(),
    },
    {
      id: '2',
      text: 'Test todo 2',
      completed: true,
      createdAt: new Date(),
    },
  ];

  const mockOnToggle = jest.fn();
  const mockOnDelete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders empty message when no todos', () => {
    const { getByText } = render(
      <TodoList todos={[]} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    expect(getByText('No todos yet. Add one above!')).toBeInTheDocument();
  });

  it('renders all todos', () => {
    const { getByText } = render(
      <TodoList todos={mockTodos} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    expect(getByText('Test todo 1')).toBeInTheDocument();
    expect(getByText('Test todo 2')).toBeInTheDocument();
  });

  it('passes correct props to TodoItem components', () => {
    const { getAllByTestId } = render(
      <TodoList todos={mockTodos} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    const todoItems = getAllByTestId('todo-item');
    expect(todoItems).toHaveLength(2);
  });
}); 