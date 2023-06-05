// import { cleanup, fireEvent, render, screen } from "@testing-library/react";
// import CreateFlashcard from "../pages/home/CreateFlashcard";
// import { Provider } from "react-redux";
// import store from "../store";

// const app = (component) =>
//   render(<Provider store={store}>{component}</Provider>);

// afterEach(() => {
//   cleanup();
// });

// describe("CreateFlashcard", () => {
// beforeEach(() => {
//   app();
// });

// it("Submit button should be disabled", () => {
//   const component = <h1>Hello</h1>;

//   const btn = { type: "submit" };

//   render(<Provider store={store}>{component}</Provider>);
//   const submitBtn = screen.getByRole("submit");
//   expect(submitBtn).toBeDisabled();
// });
// it("Submit button should not be disabled when inputs exist", () => {
//   render(<CreateFlashcard />);
//   const submitBtn = screen.getByRole("submit");
//   const groupInputEl = screen.getByPlaceholderText(/Organic Chemistry/i);
//   const groupDescInputEl = screen.getByPlaceholderText(/Organic Chemistry/i);

//   const submitTestVal = "test";

//   fireEvent.change(groupInputEl, { target: { value: submitTestVal } });
//   fireEvent.change(groupDescInputEl, { target: { value: submitTestVal } });
//   expect(submitBtn).not.toBeDisabled();
// });
// });

///////////////////////
