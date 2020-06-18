import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';

const renderComponent = () => render(<Header heading='BookLesson' text='Welcome to BookLesson.' />);

describe('Header', () => {
  it('should render heading and text', () => {
    const { getByText } = renderComponent();
    getByText('BookLesson');
    getByText('Welcome to BookLesson.');
  });
});
