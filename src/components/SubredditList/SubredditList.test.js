import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import { SubredditList } from './SubredditList';

// Create a wrapper component for the SubredditList component
const Wrapper = () => (
  <Provider store={store}>
    <SubredditList />
  </Provider>
);

describe('SubredditList Component', () => {
  test('renders SubredditList component', async () => {
    const { getByTestId } = render(<Wrapper />);

    // Check if the loading state is initially present
    expect(getByTestId('loader')).toBeInTheDocument();

    // Wait for the loading state to disappear
    await waitFor(() => expect(getByTestId('loader')).not.toBeInTheDocument(), { timeout: 5000 });

    // Check if the first result is rendered
    expect(getByTestId('result')).toBeInTheDocument();
  });

});
