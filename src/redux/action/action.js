import { CREATE_FLASH_CARD } from "./constants"

export const createFlashCard = (data) => {
    return {
        type: CREATE_FLASH_CARD,
        payload: data
    }
}