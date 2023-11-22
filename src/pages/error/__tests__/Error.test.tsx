import React from 'react';
import { render, screen } from 'utils/testUtils';
import en from 'i18n/en/en.json';

import Error from '../Error';

describe('Error', () => {
  test('renders title', () => {
    render(<Error />);
    const errorText = screen.getByText(en.error.not_found);
    expect(errorText).toBeInTheDocument();
  });
});
