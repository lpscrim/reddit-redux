import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { Posts } from '../Posts';

const server = setupServer(
  rest.get('https://www.reddit.com/r/react.json', (req, res, ctx) => {
    return res(ctx.json({ data: { children: [{ data:[
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '1'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '2'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '3'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '4'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '5'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '6'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '7'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '8'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '9'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '10'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '11'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '12'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '13'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '14'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '15'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '16'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '17'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '18'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '19'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '20'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '21'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '22'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '23'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '24'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '25'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '26'},
      {'title': 'mockPost','thumbnail':'', 'subreddit_name_prefixed': 'mockedSubreddit', 'author': 'mockAuthor', 'score': '123', 'selftext': 'mockText', 
      'id': '27'}] }] } }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches and displays data from Reddit API', async () => {
  // Mock Reddit API response
  render(<Posts />);

  // Wait for the async operation to complete
  await screen.findByText('mockPost');

  // Verify that the API was called
  expect(server.requests.length).toBe(1);

  // Verify rendered component displays the expected data
  const postElement = screen.getByText('mockPost');
  expect(postElement).toBeInTheDocument();
});

