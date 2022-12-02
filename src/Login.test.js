import { render, screen } from '@testing-library/react';
import {UserLogIn} from "./pages/LogIn";
test('renders learn react link', () => {
  render(<UserLogIn />);
  const linkElement = screen.getByText(/Log In/i);
  expect(linkElement).toBeInTheDocument();
});
