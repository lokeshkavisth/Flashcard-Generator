export const createFlashcard = (formData) => {
  return {
    type: "CREATE_FLASHCARD",
    payload: formData,
  };
};

export const deleteFlashcard = (id) => {
  return {
    type: "DELETE_FLASHCARD",
    payload: id,
  };
};
