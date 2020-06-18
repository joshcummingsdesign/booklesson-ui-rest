import React from 'react';
import { render } from '@testing-library/react';
import { App } from './App';

const renderComponent = () => render(<App />);

describe('App', () => {
  it('should render the header', () => {
    const { getByTestId } = renderComponent();
    getByTestId('header');
  });
});
