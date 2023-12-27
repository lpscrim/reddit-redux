import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Post } from './Post';
import { fetchComments } from '../../features/postsSlice';

const mockStore = configureStore([thunk]);

describe('Post component', () => {
    it('renders loading state correctly', () => {
        const initialState = {
            posts: {
              isLoading: false,
              error: null,
              selectedSubreddit: 'reactjs',
              filter: 'hot',
              posts: [
                {
                  id: 1,
                  title: 'Test Post 1',
                },
                {
                  id: 2,
                  title: 'Test Post 2',
                },
              ],
              comments: [],
              commentsLoading: false,
              commentsError: false,
            },
          }
    
        const store = mockStore(initialState);
    
        const { getByText } = render(
          <Provider store={store}>
            <Post />
          </Provider>
        );

        expect(getByText('No Comments...')).toBeInTheDocument();
      })
    })

    