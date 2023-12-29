import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { SearchResults } from "./SearchResults";

const mockStore = configureStore([thunk]);

describe("SearchResults component", () => {
  it("renders search results loading", () => {
    const initialState = {
      search: {
        isLoading: true,
        results: [],
        error: null,
      },
    };

    const store = mockStore(initialState);

    const { getByTestId } = render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    expect(getByTestId("searchLoader")).toBeInTheDocument();
  });

  it("renders search error", () => {
    const initialState = {
      search: {
        isLoading: false,
        results: [],
        error: true,
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    expect(getByText("Search Error!")).toBeInTheDocument();
  });

  it("renders results", () => {
    const initialState = {
      search: {
        isLoading: false,
        results: [
          {
            display_name_prefixed: "Sample Result 1",
            subscribers: "123",
          },
          {
            display_name_prefixed: "Sample Result 2",
            subscribers: "456",
          },
        ],
        error: null,
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    expect(getByText("Sample Result 1")).toBeInTheDocument();
    expect(getByText("Sample Result 2")).toBeInTheDocument();
  });

  it("renders no results", () => {
    const initialState = {
      search: {
        isLoading: false,
        error: null,
      },
    };

    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <SearchResults />
      </Provider>
    );

    expect(getByText("No Subreddits found!")).toBeInTheDocument();
  });
});
