import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '../../components/TodoItem/TodoItem';
import type { Todo } from '../../types/todo';

describe('TodoItem', () => {
  const mockTodo: Todo = {
    id: '1',
    text: 'Test todo',
    completed: false,
    createdAt: new Date(),
  };

  const mockOnToggle = jest.fn();
  const mockOnDelete = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders todo text correctly', () => {
    const { getByText } = render(
      <TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    expect(getByText('Test todo')).toBeInTheDocument();
  });

  it('calls onToggle when checkbox is clicked', () => {
    const { getByTestId } = render(
      <TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    fireEvent.click(getByTestId('todo-checkbox'));
    expect(mockOnToggle).toHaveBeenCalledWith('1');
  });

  it('calls onDelete when delete button is clicked', () => {
    const { getByTestId } = render(
      <TodoItem todo={mockTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    fireEvent.click(getByTestId('todo-delete-button'));
    expect(mockOnDelete).toHaveBeenCalledWith('1');
  });

  it('shows completed style when todo is completed', () => {
    const completedTodo: Todo = { ...mockTodo, completed: true };
    const { getByText } = render(
      <TodoItem todo={completedTodo} onToggle={mockOnToggle} onDelete={mockOnDelete} />
    );
    const todoText = getByText('Test todo');
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });
}); 