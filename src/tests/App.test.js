import { render, screen } from '@testing-library/react';
import App from "../components/App";

test('renders servus text', () => {
  render(<App />);
  const linkElement = screen.getByText(/nazdar /i);
  expect(linkElement).toBeInTheDocument();
});
