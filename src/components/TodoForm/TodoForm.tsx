import React, { useState } from 'react';
import { Input } from '../../shared/ui';
import { Form, DownArrow } from './styles';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

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