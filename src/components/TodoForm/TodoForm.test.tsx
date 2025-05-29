import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoForm from './TodoForm';

describe('TodoForm', () => {
  const mockOnAdd = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders input and submit button', () => {
    const { getByTestId } = render(<TodoForm onAdd={mockOnAdd} />);
    expect(getByTestId('todo-input')).toBeInTheDocument();
    expect(getByTestId('todo-submit')).toBeInTheDocument();
  });

  it('calls onAdd with input value when form is submitted', () => {
    const { getByTestId } = render(<TodoForm onAdd={mockOnAdd} />);
    const input = getByTestId('todo-input');
    const form = getByTestId('todo-form');

    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.submit(form);

    expect(mockOnAdd).toHaveBeenCalledWith('New todo');
  });

  it('clears input after form submission', () => {
    const { getByTestId } = render(<TodoForm onAdd={mockOnAdd} />);
    const input = getByTestId('todo-input') as HTMLInputElement;
    const form = getByTestId('todo-form');

    fireEvent.change(input, { target: { value: 'New todo' } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
  });

  it('does not call onAdd when input is empty', () => {
    const { getByTestId } = render(<TodoForm onAdd={mockOnAdd} />);
    const form = getByTestId('todo-form');

    fireEvent.submit(form);

    expect(mockOnAdd).not.toHaveBeenCalled();
  });

  it('disables submit button when input is empty', () => {
    const { getByTestId } = render(<TodoForm onAdd={mockOnAdd} />);
    const submitButton = getByTestId('todo-submit');

    expect(submitButton).toBeDisabled();
  });

  it('enables submit button when input has value', () => {
    const { getByTestId } = render(<TodoForm onAdd={mockOnAdd} />);
    const input = getByTestId('todo-input');
    const submitButton = getByTestId('todo-submit');

    fireEvent.change(input, { target: { value: 'New todo' } });

    expect(submitButton).not.toBeDisabled();
  });
}); 