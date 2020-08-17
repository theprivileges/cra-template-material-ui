import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const headElement = screen.getByText(/Create React App using Material-UI/i);
  expect(headElement).toBeInTheDocument();
});
