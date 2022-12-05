import {screen } from '@testing-library/react';
import{render} from './custom-render';
import App from './App';
import{BrowseRouter as Router}from 'react-router-dom';

test('renders learn react link', () => {
  render(
  <Router>
    <App />
  </Router>);
  const linkElement = screen.getByText(/Kotibet/i);
  expect(linkElement).toBeInTheDocument();
});
/*test('renders App',
 () => {
  render(<App/>, {wrapper:Router});
  const nameElement = screen.queryAllByText(/Home/i);
  expect(nameElement).toBeInTheDocument();
})*/
