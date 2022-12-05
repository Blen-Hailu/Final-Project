import { render, screen } from '@testing-library/react';
import RegistrationForm from './form';

/*test('renders correctly', () => {
  render(
      <RegistrationForm/>
    );
  const nameElement = screen.get('textbox');
  expect(nameElement).toBeInTheDocument();
});*/


test('renders learn react link', () => {
  render(<RegistrationForm />);
  const linkElement = screen.getByText(/register/i);
  expect(linkElement).toBeInTheDocument();
});
