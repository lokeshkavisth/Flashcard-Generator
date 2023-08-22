import * as Yup from "yup";

export const flashcardSchema = Yup.object().shape({
  groups: Yup.object().shape({
    group: Yup.string()
      .min(2, "Minimum character length is 2")
      .max(20, "You have reached the max length")
      .required("Required"),
  }),

  terms: Yup.array(
    Yup.object().shape({
      term: Yup.string()
        .min(10, "Minimum character length is 10")
        .max(200, "You have reached the max length")
        .required("Required"),

      definition: Yup.string()
        .min(100, "Minimum character length is 100")
        .max(2000, "You have reached the max length")
        .required("Required"),
    })
  ),
});
