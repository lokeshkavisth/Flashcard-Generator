// This function creates an action that creates a flashcard.
export const createFlashcard = (formData) => {
  // The `type` property of the action is set to `CREATE_FLASHCARD`.
  // This indicates that the action is for creating a flashcard.
  // The `payload` property of the action is set to the `formData` object.
  // This object contains the data that is used to create the flashcard.
  return {
    type: "CREATE_FLASHCARD",
    payload: formData,
  };
};

// This function creates an action that deletes a flashcard.
export const deleteFlashcard = (id) => {
  // The `type` property of the action is set to `DELETE_FLASHCARD`.
  // This indicates that the action is for deleting a flashcard.
  // The `payload` property of the action is set to the `id` of the flashcard that is to be deleted.
  return {
    type: "DELETE_FLASHCARD",
    payload: id,
  };
};
