import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "@testing-library/jest-dom";
import MyFlashcard from "../pages/MyFlashcard";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
describe("MyFlashcard", () => {
  let component;
  let store;
  beforeEach(() => {
    store = mockStore({
      flashCardData: {
        flashcards: [
          {
            id: 1686378180159,
            groups: {
              group: "Dummy text group",
              groupDesc: "Lorem ipsum",
              Profile: "Lorem profile",
            },
            terms: [
              {
                term: "Lorem ipsum dolor",
                definition:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                image: "Lorem image",
              },
            ],
          },
        ],
      },
    });

    // eslint-disable-next-line testing-library/no-render-in-setup
    component = render(
      <BrowserRouter>
        <Provider store={store}>
          <MyFlashcard />
        </Provider>
      </BrowserRouter>
    );
  });
  it("Card should be render", () => {
    const { getByTestId, getByText } = component;
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText("Dummy text group")).toBeInTheDocument();
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByTestId("container")).toBeInTheDocument();
  });
});
