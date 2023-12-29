import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../store/store";
import { Header } from "./Header";

// Create a wrapper component for the Header component
const Wrapper = () => (
  <Provider store={store}>
    <Header />
  </Provider>
);

describe("Header Component", () => {
  test("renders Header component", () => {
    const { getByText, getByPlaceholderText } = render(<Wrapper />);

    // Check if the component renders the title
    expect(getByText("BREADDDIT")).toBeInTheDocument();

    // Check if the component renders the search bar
    expect(getByPlaceholderText("Search Subreddits")).toBeInTheDocument();
  });

  test("handles input change and form submission", () => {
    const { getByPlaceholderText, getByTestId } = render(<Wrapper />);

    // Simulate user typing in the search bar
    fireEvent.change(getByPlaceholderText("Search Subreddits"), {
      target: { value: "reactjs" },
    });

    // Check if the input value is updated
    expect(getByPlaceholderText("Search Subreddits")).toHaveValue("reactjs");

    // Simulate form submission
    fireEvent.submit(getByTestId("search-form"));

    // Check if the search term is cleared after form submission
    expect(getByPlaceholderText("Search Subreddits")).toHaveValue("");
  });
});
