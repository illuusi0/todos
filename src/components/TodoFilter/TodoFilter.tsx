import React from 'react';
import styled from 'styled-components';
import type { FilterType } from '../../types/todo';

interface TodoFilterProps {
  currentFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  hasCompletedTodos: boolean;
  onClearCompleted: () => void;
}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  color: ${props => props.$active ? '#4d4d4d' : '#777'};
  cursor: pointer;
  font-size: inherit;
  padding: 3px 7px;
  border: 1px solid ${props => props.$active ? '#efd5d5' : 'transparent'};
  border-radius: 3px;
  font-weight: ${props => props.$active ? '400' : '300'};

  &:hover {
    border-color: #efd5d5;
  }
`;

const ClearButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: inherit;
  padding: 3px 7px;
  margin-left: 0.5rem;
  font-weight: 300;

  &:hover {
    text-decoration: underline;
  }
`;

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