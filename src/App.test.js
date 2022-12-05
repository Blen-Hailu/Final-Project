import {render, screen } from '@testing-library/react';
import App from './App';
import{BrowserRouter as Router}from 'react-router-dom';

test('renders App',
 () => {
  render(<Router><App/> </Router>);  
  const nameElement = screen.getByText(/privacy policy/i);
  expect(nameElement).toBeInTheDocument();
})
