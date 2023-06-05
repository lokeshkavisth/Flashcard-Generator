// retrieving data from the localStore
const localStoreData = JSON.parse(localStorage.getItem("flashcards"));

// This variable represents the initial state of the flashcard data.
// If data is present in the local store, it will be retrieved and used as the initial state.
// Otherwise, an empty array will be used as the initial state.
const initState = {
  flashcards: localStoreData ? localStoreData : [],
};

// This function is a reducer for manipulating flashcard data.
// It takes the current state and an action as input, and returns the new state.
export const flashCardData = (state = initState, { type, payload }) => {
  switch (type) {
    // If the action type is `CREATE_FLASHCARD`, a new flashcard is created and added to the state.
    case "CREATE_FLASHCARD":
      return {
        ...state,
        flashcards: [...state.flashcards, payload],
      };

    // If the action type is `DELETE_FLASHCARD`, a flashcard is deleted from the state.
    case "DELETE_FLASHCARD":
      // The `filter()` method is used to find all flashcards in the state whose `id` property does not match the `payload`.
      // The remaining flashcards are then used to update the state.
      const remainFlashcards = state.flashcards.filter(
        (card) => card.id !== payload
      );

      // The updated state is then returned.
      localStorage.setItem("flashcards", JSON.stringify(remainFlashcards));

      return {
        ...state,
        flashcards: remainFlashcards,
      };

    // If the action type does not match any of the cases, the current state is returned.
    default:
      return state;
  }
};
