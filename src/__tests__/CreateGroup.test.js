// import { fireEvent, render, screen } from "@testing-library/react";
// import CreateGroup from "../components/CreateGroup";

// describe("CreateGroup", () => {
//   test("Group input should be empty", () => {
//     render(<CreateGroup />);
//     const groupInputEl = screen.getByPlaceholderText(/Organic Chemistry/i);
//     expect(groupInputEl.value).toBe("");
//   });

//   test("Group input should change", () => {
//     render(<CreateGroup />);
//     const groupInputEl = screen.getByPlaceholderText(/Organic Chemistry/i);
//     const groupTestVal = "test";
//     fireEvent.change(groupInputEl, { target: { value: groupInputEl } });
//     expect(groupInputEl.value).toBe(groupTestVal);
//   });

//   test("Group Description input should change", () => {
//     render(<CreateGroup />);
//     const groupDescInputEl = screen.getByPlaceholderText(/Organic Chemistry/i);
//     const groupDescTestVal = "test";

//     fireEvent.change(groupDescInputEl, { target: { value: groupDescTestVal } });

//     expect(groupDescInputEl.value).toBe(groupDescTestVal);
//   });
// });
