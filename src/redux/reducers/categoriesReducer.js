import { types } from "../types/types"

const categoriesReducer = (state = [], action) => {
    switch(action.type) {
        case types.getCategories:
            return action.payload
        default:
            return state
    }
}

export {categoriesReducer}