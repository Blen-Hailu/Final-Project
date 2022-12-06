import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders text', () => {
  render(<App />, { wrapper: BrowserRouter });
  const linkElement = screen.getByText(/Minae/i);
  expect(linkElement).toBeInTheDocument();
});

