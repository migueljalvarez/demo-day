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

const searchReducer = (state = {title: "", location: "", services: []}, action) => {
    switch(action.type) {
        case types.searchServices:
            return {
                title: action.payload.title,
                location: action.payload.location,
                services: action.payload.services,
            }
        case types.searchReset:
            return (
                {
                    title: "",
                    location: "",
                    services: [],
                }
            )
        default:
            return state
    }
}

export {serviceReducer, servicesReducer, searchReducer};