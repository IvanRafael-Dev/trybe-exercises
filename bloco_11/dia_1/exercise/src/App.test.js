import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);

  const taskJavascript = screen.getByText(/Javascript/i);
  expect(taskJavascript).toBeInTheDocument();

  const taskReact = screen.getByText(/React/i);
  expect(taskReact).toBeInTheDocument();

  const taskJest = screen.getByText(/Jest/i);
  expect(taskJest).toBeInTheDocument();

});
