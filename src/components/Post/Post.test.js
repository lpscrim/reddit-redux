import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Post } from './Post';

const mockStore = configureStore([thunk]);

describe('Post component', () => {
    it('renders no comments correctly', () => {
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

      it('renders loading comments correctly', () => {
        const initialState = {
            posts: {
              isLoading: true,
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
              commentsLoading: true,
              commentsError: false,
            },
          }
    
        const store = mockStore(initialState);
    
        const { getAllByText } = render(
          <Provider store={store}>
            <Post />
          </Provider>
        );

        expect(getAllByText('Comments loading').length).toBeGreaterThan(0);
        
      })

      it('renders comments correctly', () => {
        const initialState = {
            posts: {
              isLoading: null,
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
              comments: [
                {
                  id: 'comment1',
                  author: 'user1',
                  body: 'This is a comment.',
                  score: 5,
                  
                },
              ],
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

        expect(getByText('This is a comment.')).toBeInTheDocument();
      });
    })

    