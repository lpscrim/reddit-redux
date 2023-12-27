import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SubredditList } from './SubredditList';

const mockStore = configureStore([thunk]);

describe('SubredditList component', () => {
  it('renders loading state correctly', () => {
    const initialState = {
      subreddits: {
        isLoading: true,
        subreddits: [
            {
              id: 'subreddit1',
              display_name_prefixed: 'r/subreddit1',
              icon_img: 'subreddit1-icon.png',
            },
            {
              id: 'subreddit2',
              display_name_prefixed: 'r/subreddit2',
              icon_img: 'subreddit2-icon.png',
            },
        ],
      },
    };

    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <SubredditList />
      </Provider>
    );

    expect(getByTestId('loader')).toBeInTheDocument();
  });

  it('renders subreddits correctly', () => {
    const initialState = {
      subreddits: {
        isLoading: false,
        subreddits: [
          {
            id: 'subreddit1',
            display_name_prefixed: 'r/subreddit1',
            icon_img: 'subreddit1-icon.png',
          },
          {
            id: 'subreddit2',
            display_name_prefixed: 'r/subreddit2',
            icon_img: 'subreddit2-icon.png',
          },
        ],
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <SubredditList />
      </Provider>
    );

      expect(getByText('r/subreddit1')).toBeInTheDocument();
      expect(getByText('r/subreddit2')).toBeInTheDocument();
  });
  
});

