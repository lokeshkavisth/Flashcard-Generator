const localStoreData = JSON.parse(localStorage.getItem("flashcards"));

const initState = {
  flashcards: localStoreData ? localStoreData : [],
};

export const flashCardData = (state = initState, { type, payload }) => {
  switch (type) {
    case "CREATE_FLASHCARD":
      return {
        ...state,
        flashcards: [...state.flashcards, payload],
      };

    case "DELETE_FLASHCARD":
      const remainFlashcards = state.flashcards.filter(
        (card) => card.id !== payload
      );

      localStorage.setItem("flashcards", JSON.stringify(remainFlashcards));

      return {
        ...state,
        flashcards: remainFlashcards,
      };

    default:
      return state;
  }
};
