import { render, screen } from '@testing-library/react';
import RegistrationForm from './form';

test('renders correctly', () => {
  render(
      <RegistrationForm/>
    );
  const nameElement = screen.getAllByRole('textbox');
  expect(nameElement).toBeInTheDocument();
});
