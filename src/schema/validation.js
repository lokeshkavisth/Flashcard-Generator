import * as Yup from "yup";

export const flashcardSchema = Yup.object().shape({
  groups: Yup.object().shape({
    group: Yup.string()
      .min(2, "Group name must be at least 2 characters long")
      .max(40, "Group name cannot exceed 40 characters")
      .required("Group name is required"),
  }),

  terms: Yup.array().of(
    Yup.object().shape({
      term: Yup.string()
        .min(10, "Term must be at least 10 characters long")
        .max(200, "Term cannot exceed 200 characters")
        .required("Term is required"),

      definition: Yup.string()
        .min(100, "Definition must be at least 100 characters long")
        .max(2000, "Definition cannot exceed 2000 characters")
        .required("Definition is required"),
    })
  ),
});
