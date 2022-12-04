import { render, screen } from '@testing-library/react';
import App from './App';
import{BrowseRouter as Router}from 'react-router-dom';

test('renders correctly', () => {
  render(
  <Router> 
    <App />
  </Router>,
    );
  const nameElement = screen.getByText(/Home/i);
  expect(nameElement).toBeInTheDocument();
});
