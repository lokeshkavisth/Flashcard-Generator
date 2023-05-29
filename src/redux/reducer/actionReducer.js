const initState = {
  flashCard: [],
};
export const actionReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_FLASH_CARD":
      return {
        ...state,
        flashCard: [...state.flashCard, action.payload],
      };
    default:
      return state;
  }
};
