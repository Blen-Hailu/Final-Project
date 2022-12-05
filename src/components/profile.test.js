import { render, screen } from '@testing-library/react';
import AddProfileData from './profile';

test('renders learn react link', () => {
  render(<AddProfileData />);
  const linkElement = screen.getByText(/Contact us to get the best offers!/i);
  expect(linkElement).toBeInTheDocument();
});
