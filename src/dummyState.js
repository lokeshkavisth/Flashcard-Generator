import React from "react";
import Card from "./components/ui/card/Card";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render } from "@testing-library/react";

const dummyState = () => {
  const [initialVal, setInitialVal] = React.useState({});
  setInitialVal({
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
  return initialVal;
};
export default dummyState;

const mockStore = configureStore([]);

describe("Card component", () => {
  let store;
  let component;

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

    component = render(
      <Provider store={store}>
        <Card />
      </Provider>
    );
  });
});
