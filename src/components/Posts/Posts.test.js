// Posts.test.js

import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { Posts } from './Posts';
import postsReducer from '../../features/postsSlice'; // Adjust the path

describe('Posts Component err', () => {
  const initialState = {
    posts: {
      isLoading: true,
      error: null,
      selectedSubreddit: 'mockedSubreddit',
      filter: 'mockedFilter',
      posts: [
        
      ],
      searchTerm: '',
      comments: [],
      commentsLoading: false,
      commentsError: false,
    },
  };
  let store;


  test('renders loading state and then posts', async () => {
    const { getAllByTestId, getByTestId, queryAllByTestId } = render(
      <Provider store={store}>
        <Posts />
      </Provider>
    );

 
    // Check if at least one loading state is initially present
    expect(getAllByTestId('postLoading').length > 0).toBe(true);

    // Wait for all loading states to disappear
    await waitFor(() => expect(queryAllByTestId('postLoading').length === 0).toBe(true));

    console.log('Rendered content:', getByTestId('postError'));

    // Check if the post is rendered
    expect(getByTestId('postError')).toBeInTheDocument();

  });
});

  