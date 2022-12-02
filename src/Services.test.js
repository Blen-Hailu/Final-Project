import { render, screen } from '@testing-library/react';
import {Services} from "./pages/Services";
test('renders learn react link', () => {
  render(<Services />);
  const linkElement = screen.getByText(/Services/i);
  expect(linkElement).toBeInTheDocument();
});
