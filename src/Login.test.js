import { render, screen } from '@testing-library/react';
import {UserLogIn} from "./pages/LogIn";

test('Log in renders correctly', () => {
  render(<UserLogIn />);
  const textElement = screen.getByText(/Log In/i);
  expect(textElement).toBeInTheDocument();
});
 