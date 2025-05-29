import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import type { FilterType } from '../../types/todo';

describe('TodoFilter', () => {
  const mockOnFilterChange = jest.fn();
  const mockOnClearCompleted = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all filter buttons', () => {
    const { getByTestId } = render(
      <TodoFilter
        currentFilter="all"
        onFilterChange={mockOnFilterChange}
        hasCompletedTodos={false}
        onClearCompleted={mockOnClearCompleted}
      />
    );

    expect(getByTestId('filter-all')).toBeInTheDocument();
    expect(getByTestId('filter-active')).toBeInTheDocument();
    expect(getByTestId('filter-completed')).toBeInTheDocument();
  });

  it('shows clear completed button when there are completed todos', () => {
    const { getByTestId } = render(
      <TodoFilter
        currentFilter="all"
        onFilterChange={mockOnFilterChange}
        hasCompletedTodos={true}
        onClearCompleted={mockOnClearCompleted}
      />
    );

    expect(getByTestId('clear-completed')).toBeInTheDocument();
  });

  it('hides clear completed button when there are no completed todos', () => {
    const { queryByTestId } = render(
      <TodoFilter
        currentFilter="all"
        onFilterChange={mockOnFilterChange}
        hasCompletedTodos={false}
        onClearCompleted={mockOnClearCompleted}
      />
    );

    expect(queryByTestId('clear-completed')).not.toBeInTheDocument();
  });

  it.each<FilterType>(['all', 'active', 'completed'])(
    'calls onFilterChange with %s when clicked',
    (filter) => {
      const { getByTestId } = render(
        <TodoFilter
          currentFilter="all"
          onFilterChange={mockOnFilterChange}
          hasCompletedTodos={false}
          onClearCompleted={mockOnClearCompleted}
        />
      );

      fireEvent.click(getByTestId(`filter-${filter}`));
      expect(mockOnFilterChange).toHaveBeenCalledWith(filter);
    }
  );

  it('calls onClearCompleted when clear completed button is clicked', () => {
    const { getByTestId } = render(
      <TodoFilter
        currentFilter="all"
        onFilterChange={mockOnFilterChange}
        hasCompletedTodos={true}
        onClearCompleted={mockOnClearCompleted}
      />
    );

    fireEvent.click(getByTestId('clear-completed'));
    expect(mockOnClearCompleted).toHaveBeenCalled();
  });
}); 