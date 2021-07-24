import { render, screen, test , expect} from '@testing-library/react';
import React from 'react';
import {Home} from 'pages/home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Hi there!/i);
  expect(linkElement).toBeInTheDocument();
});
