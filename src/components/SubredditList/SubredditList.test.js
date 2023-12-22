import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { SubredditList } from './SubredditList';
import subredditReducer from '../../features/subredditsSlice';
import { configureStore } from '@reduxjs/toolkit';

describe('SubredditList Component', () => {

  const initialState = {
    subreddits: [
      { 'sub.display_name_prefixed': 'test1','img': null, 'id':'1'}, 
      { 'sub.display_name_prefixed': 'test2','img': null, 'id':'2'},
      { 'sub.display_name_prefixed': 'test3','img': null, 'id':'3'},
      { 'sub.display_name_prefixed': 'test4','img': null, 'id':'4'},
      { 'sub.display_name_prefixed': 'test5','img': null, 'id':'5'},
      { 'sub.display_name_prefixed': 'test6','img': null, 'id':'6'},
      { 'sub.display_name_prefixed': 'test7','img': null, 'id':'7'},
      { 'sub.display_name_prefixed': 'test8','img': null, 'id':'8'},
      { 'sub.display_name_prefixed': 'test9','img': null, 'id':'9'},
      { 'sub.display_name_prefixed': 'test10','img': null, 'id':'10'},
      { 'sub.display_name_prefixed': 'test11','img': null, 'id':'11'},
      { 'sub.display_name_prefixed': 'test12','img': null, 'id':'12'},
      { 'sub.display_name_prefixed': 'test13','img': null, 'id':'13'},
      { 'sub.display_name_prefixed': 'test14','img': null, 'id':'14'},
      { 'sub.display_name_prefixed': 'test15','img': null, 'id':'15'},
      { 'sub.display_name_prefixed': 'test16','img': null, 'id':'16'},
      { 'sub.display_name_prefixed': 'test17','img': null, 'id':'17'},
      { 'sub.display_name_prefixed': 'test18','img': null, 'id':'18'},
      { 'sub.display_name_prefixed': 'test19','img': null, 'id':'19'}
    ]
  };
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        subreddits: subredditReducer,
      },
      preloadedState: initialState,
    });
  });

  test('renders SubredditList component', async () => {
    const { getByTestId } = render(
    <Provider store={store}>
      <SubredditList />
    </Provider>);

    // Check if the loading state is initially present
    expect(getByTestId('loader')).toBeInTheDocument();

    // Wait for the loading state to disappear
    await waitFor(() => expect(getByTestId('loader')).not.toBeInTheDocument(), { timeout: 20000 });

    // Check if the first result is rendered
    expect(getByTestId('result')).toBeInTheDocument();
  });

});
