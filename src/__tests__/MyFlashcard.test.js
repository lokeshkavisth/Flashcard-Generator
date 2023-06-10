import { render, screen } from "@testing-library/react";
import MyFlashcard from "../pages/MyFlashcard";
import { Provider, useSelector } from "react-redux";
import store from "../store";
import { BrowserRouter } from "react-router-dom";
import React from "react";

describe("MyFlashcard", () => {
  //   function renderWithContext(element = React.ReactElement) {
  //     render(
  //       <Provider store={store}>
  //         <BrowserRouter>{element}</BrowserRouter>
  //       </Provider>
  //     );
  //   }

  it.only("Card should be render", () => {
    // const initialVal = {
    //   flashCardData: {
    //     flashcards: [
    //       {
    //         id: 1686378180159,
    //         groups: {
    //           group: "JavaScript Developer",
    //           groupDesc: "sdfsdfsdfsf",
    //           Profile: "",
    //         },
    //         terms: [
    //           {
    //             term: "fffffffffffffffffffffffffff",
    //             defination:
    //               "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    //             image: "",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // };

    render(
      <Provider>
        <MyFlashcard />,
      </Provider>
    );
  });

  const cardContainer = screen.getByText(/You don't have any flashcards/i);
  expect(cardContainer).toBeInTheDocument();
});
