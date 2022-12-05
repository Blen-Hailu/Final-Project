/*import { render, screen } from '@testing-library/react';
import FreelancerRegsitrationForm from './form2';

test('renders correctly', () => {
  render(
    <FreelancerRegsitrationForm />
  );
  const nameElement = screen.getAllByRole('array');
  expect(nameElement).toBeInTheDocument();
});*/
import { render, screen } from '@testing-library/react';
import FreelancerRegsitrationForm from './form2';

test('renders learn react link', () => {
  render(<FreelancerRegsitrationForm />);
  const linkElement = screen.getByText(/register/i);
  expect(linkElement).toBeInTheDocument();
});

