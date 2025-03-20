import { render, screen } from '@testing-library/react';
import Projects from './Projects';

test('renders project list', () => {
  render(<Projects />);
  const projectElement = screen.getByText(/Project One/i);
  expect(projectElement).toBeInTheDocument();
});
