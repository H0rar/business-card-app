import { render, screen } from '@testing-library/react';
import App from "../components/App";

test('renders servus chuju text', () => {
  render(<App />);
  const linkElement = screen.getByText(/nazdar kokot/i);
  expect(linkElement).toBeInTheDocument();
});
