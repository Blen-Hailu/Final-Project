import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders text', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText(/Minae/i);
  expect(linkElement).toBeInTheDocument();
});

