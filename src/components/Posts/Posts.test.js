// src/components/Posts/Posts.test.js
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Posts } from './Posts';

const mockStore = configureStore([thunk]);

describe('Posts Component', () => {
  it('renders loading state correctly', () => {
    const initialState = {
      posts: {
        isLoading: true,
        error: null,
        selectedSubreddit: 'reactjs',
        filter: 'hot',
        posts: [],
      },
    };

    const store = mockStore(initialState);

    const { getAllByTestId } = render(
      <Provider store={store}>
        <Posts />
      </Provider>
    );

    const loadingElements = getAllByTestId("postLoading");
    
    // Assert that the loading element is present
    expect(loadingElements.length).toBeGreaterThan(0);
  });

  it('renders error state correctly', () => {
    const initialState = {
      posts: {
        isLoading: null,
        error: true,
        selectedSubreddit: 'reactjs',
        filter: 'hot',
        posts: [],
      },
    };

    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <Posts />
      </Provider>
    );

    const errorElement = getByTestId("postError");
    
    // Assert that the error element is present
    expect(errorElement).toBeInTheDocument();
  });



});

