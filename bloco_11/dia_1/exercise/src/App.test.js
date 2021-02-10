import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  
  const taskJavascript = screen.getByText(/Javascript/i);
  expect(taskJavascript).toBeInTheDocument();

  const React = screen.getByText(/React/i);
  expect(React).toBeInTheDocument();

  const Jest = screen.getByText(/Jest/i);
  expect(Jest).toBeInTheDocument();

});
