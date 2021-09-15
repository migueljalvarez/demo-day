import { types } from "../types/types";

const serviceReducer = (state = {}, action) => {
    switch(action.type) {
        case types.addService:
            return action.payload
        case types.getService:
            return action.payload
        default:
            return state
    }
}

const servicesReducer = (state = [], action) => {
    switch(action.type) {
        case types.getServices:
            return action.payload
        default:
            return state
    }
}

export {serviceReducer, servicesReducer};