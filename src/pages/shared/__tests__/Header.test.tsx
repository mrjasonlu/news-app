import React from 'react';
import { render, screen } from 'utils/testUtils';
import en from 'i18n/en/en.json';

import Header from '../Header';

describe('Header', () => {
  test('renders title', () => {
    render(<Header />);
    const title = screen.getByText(en.header.title);
    expect(title).toBeInTheDocument();
  });
});
