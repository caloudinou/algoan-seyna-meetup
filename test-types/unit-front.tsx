import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import ItemList from '../item-list';

test('renders "no items" when the item list is empty', () => {
  render(<ItemList items={[]} />);
  expect(screen.getByText(/no items/i)).toBeInTheDocument();
});

test('renders the items in a list', () => {
  render(<ItemList items={['apple', 'orange', 'pear']} />);
  expect(screen.getByText(/apple/i)).toBeInTheDocument();
  expect(screen.getByText(/orange/i)).toBeInTheDocument();
  expect(screen.getByText(/pear/i)).toBeInTheDocument();
  expect(screen.queryByText(/no items/i)).not.toBeInTheDocument();
});
