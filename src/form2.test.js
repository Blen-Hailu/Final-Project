import { render, screen } from '@testing-library/react';
import {Register} from "./pages/Register";

test('renders correctly', () => {
  render(
    <Register />
  );
  const linkElement = screen.getByText(/Register/i);
  expect(linkElement).toBeInTheDocument();
});
