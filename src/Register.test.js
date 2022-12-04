import { render, screen } from '@testing-library/react';
import {Register} from "./pages/Register";
import{BrowseRouter as Router} from 'react-router-dom';


test('renders learn react component', () => {
  render(
    <Register />
  );
  const linkElement = screen.getByText(/Register/i);
  expect(linkElement).toBeInTheDocument();
});
