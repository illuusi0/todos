import React, { useState } from 'react';
import styled from 'styled-components';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const Form = styled.form`
  position: relative;
  border-bottom: 1px solid #e6e6e6;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 3rem;
  font-size: 24px;
  font-family: inherit;
  font-weight: 300;
  color: #4d4d4d;
  border: none;
  background: none;
  box-sizing: border-box;

  &::placeholder {
    color: #e6e6e6;
    font-style: italic;
  }

  &:focus {
    outline: none;
  }
`;

const DownArrow = styled.span`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%) rotate(90deg);
  color: #e6e6e6;
  font-size: 22px;
  pointer-events: none;
  
  &::before {
    content: '❯';
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin: 0 0 1.5rem;
`;

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} data-testid="todo-form">
      <DownArrow />
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
        data-testid="todo-input"
      />
    </Form>
  );
};

export default TodoForm; 