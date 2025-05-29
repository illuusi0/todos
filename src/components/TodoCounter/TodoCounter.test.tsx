import React from 'react';
import { render } from '@testing-library/react';
import TodoCounter from './TodoCounter';

describe('TodoCounter', () => {
  it('displays correct count for multiple items', () => {
    const { getByText } = render(<TodoCounter activeCount={3} />);
    expect(getByText('3 items left')).toBeInTheDocument();
  });

  it('displays correct count for single item', () => {
    const { getByText } = render(<TodoCounter activeCount={1} />);
    expect(getByText('1 item left')).toBeInTheDocument();
  });

  it('displays correct count for zero items', () => {
    const { getByText } = render(<TodoCounter activeCount={0} />);
    expect(getByText('0 items left')).toBeInTheDocument();
  });
}); 