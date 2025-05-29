import React from 'react';
import type { FilterType } from '../../types/todo';
import { FilterButton } from '../../shared/ui';
import { FilterContainer, ClearButton } from './styles';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  hasCompletedTodos: boolean;
  onClearCompleted: () => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
  hasCompletedTodos,
  onClearCompleted
}) => {
  return (
    <FilterContainer data-testid="todo-filter">
      <FilterButton
        $active={currentFilter === 'all'}
        onClick={() => onFilterChange('all')}
        data-testid="filter-all"
      >
        All
      </FilterButton>
      <FilterButton
        $active={currentFilter === 'active'}
        onClick={() => onFilterChange('active')}
        data-testid="filter-active"
      >
        Active
      </FilterButton>
      <FilterButton
        $active={currentFilter === 'completed'}
        onClick={() => onFilterChange('completed')}
        data-testid="filter-completed"
      >
        Completed
      </FilterButton>
      {hasCompletedTodos && (
        <ClearButton
          onClick={onClearCompleted}
          data-testid="clear-completed"
        >
          Clear completed
        </ClearButton>
      )}
    </FilterContainer>
  );
};

export default TodoFilter; 