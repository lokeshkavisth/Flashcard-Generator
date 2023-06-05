// This function imports the `Yup` library.
import * as Yup from "yup";

// This function exports a `flashcardSchema` object.
// The `flashcardSchema` object is used to validate the data submitted by the user in the flashcard form.
export const flashcardSchema = Yup.object().shape({
  // The `groups` property is an object that represents the groups of flashcards.
  groups: Yup.object().shape({
    // The `group` property is a string that represents the name of the group.
    group: Yup.string()
      .min(2, "Minimum character length is 2")
      .max(20, "You have reached the max length")
      .required("Required"),
  }),

  // The `terms` property is an array of objects that represent the terms in each group.
  terms: Yup.array(
    Yup.object().shape({
      // The `term` property is a string that represents the term.
      term: Yup.string()
        .min(10, "Minimum character length is 10")
        .max(200, "You have reached the max length")
        .required("Required"),

      // The `defination` property is a string that represents the definition of the term.
      defination: Yup.string()
        .min(100, "Minimum character length is 100")
        .max(2000, "You have reached the max length")
        .required("Required"),
    })
  ),
});
