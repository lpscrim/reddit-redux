import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SearchResults } from './SearchResults';

const mockStore = configureStore([thunk]);

describe('SearchResults component', () => {
  it('renders search results loading', () => {
    const initialState = {
      search: {
        isLoading: true,
        results: [
            {
                id: 'result1',
                title: 'Sample Result 1',
            },
            {
                id: 'result2',
                title: 'Sample Result 2',
            },
        ],
      },
    };

    const store = mockStore(initialState);

    const { getByTestId, debug } = render(
      <Provider store={store}>
            <SearchResults />
      </Provider>
    );

    debug();

    expect(getByTestId('searchLoader')).toBeInTheDocument();
  });
});
