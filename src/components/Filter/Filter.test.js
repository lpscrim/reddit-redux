import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { Filter } from './Filter';

// Create a wrapper component for the Filter component
const Wrapper = () => (
  <Provider store={store}>
    <Filter />
  </Provider>
);

describe('Filter Component', () => {
  test('renders Filter component', () => {
    const { getByText } = render(<Wrapper />);

    // Check if the component renders the Filter title
    expect(getByText('Filter by:')).toBeInTheDocument();

    // Check if the component renders the 'Top' filter card
    expect(getByText('Top')).toBeInTheDocument();

    // Check if the component renders the 'Best' filter card
    expect(getByText('Best')).toBeInTheDocument();

    // Check if the component renders the 'New' filter card
    expect(getByText('New')).toBeInTheDocument();
  });

  test('handles filter clicks', () => {
    const { getByText, getByTestId } = render(<Wrapper />);

    // Simulate user clicking on the 'Top' filter
    fireEvent.click(getByText('Top'));

    // Check if the 'Top' filter card has the 'active' class
    expect(getByTestId('top-card')).toHaveClass('active');

    // Simulate user clicking on the 'Best' filter
    fireEvent.click(getByText('Best'));

    // Check if the 'Best' filter card has the 'active' class
    expect(getByTestId('best-card')).toHaveClass('active');

    // Simulate user clicking on the 'New' filter
    fireEvent.click(getByText('New'));

    // Check if the 'New' filter card has the 'active' class
    expect(getByTestId('new-card')).toHaveClass('active');
  });
});
