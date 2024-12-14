import { render, screen, act, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from './App';

it.skip('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
