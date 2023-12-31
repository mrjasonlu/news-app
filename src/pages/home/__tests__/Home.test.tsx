import React from 'react';
import { render, screen } from 'utils/testUtils';
import en from 'i18n/en/en.json';

import Home from '../Home';

describe('Home', () => {
  test('renders title', () => {
    render(<Home />);
    const title = screen.getByText(en.home.title);
    expect(title).toBeInTheDocument();
  });
});
