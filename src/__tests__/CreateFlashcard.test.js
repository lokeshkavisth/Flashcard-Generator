import { fireEvent, render, screen } from "@testing-library/react";
import CreateFlashcard from "../pages/home/CreateFlashcard";
import { Provider } from "react-redux";
import { store } from "../store";
import App from "../App";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import React from "react";
import Toast from "../components/ui/toast/Toast";

it("App should render the components", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const appEl = screen.getByTestId("appDiv");
  expect(appEl).toBeInTheDocument();
});

// createFlashcard test cases group
describe("CreateFlashcard", () => {
  async function renderWithContext(element = React.ReactElement) {
    render(
      <Provider store={store}>
        <BrowserRouter>{element}</BrowserRouter>
      </Provider>
    );
  }

  it("Submit button should be disabled on initial render", async () => {
    renderWithContext(<CreateFlashcard />);
    expect(
      await screen.findByRole("button", { name: /create flashcard/i })
    ).toBeDisabled();
  });

  it("Submit button should not be disabled when inputs are not empty", () => {
    renderWithContext(<CreateFlashcard />);
    const mockValue = "test";

    const groupInputEl = screen.getByLabelText(/create group*/i);
    const groupDescInputEl = screen.getByLabelText(/add description/i);
    const termInputEl = screen.getByLabelText(/enter term*/i);
    const definationInputEl = screen.getByLabelText(/enter defination*/i);
    const buttonEl = screen.getByRole("button", { name: /create flashcard/i });

    fireEvent.change(groupInputEl, { target: { value: mockValue } });
    fireEvent.change(groupDescInputEl, { target: { value: mockValue } });
    fireEvent.change(termInputEl, { target: { value: mockValue } });
    fireEvent.change(definationInputEl, { target: { value: mockValue } });
    expect(buttonEl).not.toBeDisabled();
  });

  it("Form should be submit when click on create flashcard button and a toast should be popup", () => {
    renderWithContext(<CreateFlashcard />);
    render(<Toast />);
    const submitTestVal = "testValue";

    const groupInputEl = screen.getByLabelText(/create group*/i);
    const groupDescInputEl = screen.getByLabelText(/add description/i);
    const termInputEl = screen.getByLabelText(/enter term*/i);
    const definationInputEl = screen.getByLabelText(/enter defination*/i);
    const buttonEl = screen.getByRole("button", { name: /create flashcard/i });
    const toastEl = screen.getByTestId("toast-dataid");

    fireEvent.change(groupInputEl, { target: { value: submitTestVal } });
    fireEvent.change(groupDescInputEl, { target: { value: submitTestVal } });
    fireEvent.change(termInputEl, { target: { value: submitTestVal } });
    fireEvent.change(definationInputEl, { target: { value: submitTestVal } });
    fireEvent.click(buttonEl);
    expect(toastEl).toBeInTheDocument();
  });

  it("After submitting the form inputs should be empty", () => {
    renderWithContext(<CreateFlashcard />);
    const submitTestVal = "";

    const groupInputEl = screen.getByLabelText(/create group*/i);
    const groupDescInputEl = screen.getByLabelText(/add description/i);
    const termInputEl = screen.getByLabelText(/enter term*/i);
    const definationInputEl = screen.getByLabelText(/enter defination*/i);
    const buttonEl = screen.getByRole("button", { name: /create flashcard/i });

    fireEvent.change(groupInputEl, { target: { value: submitTestVal } });
    fireEvent.change(groupDescInputEl, { target: { value: submitTestVal } });
    fireEvent.change(termInputEl, { target: { value: submitTestVal } });
    fireEvent.change(definationInputEl, { target: { value: submitTestVal } });
    fireEvent.click(buttonEl);
    expect(groupDescInputEl).toBeEmptyDOMElement();
  });
});
