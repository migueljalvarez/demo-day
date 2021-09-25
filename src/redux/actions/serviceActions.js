import Swal from "sweetalert2"
import {
    addService,
    getService,
    getServices,
    search
} from "../../services/service"
import {
    types
} from "../types/types"

export const newService = (data) => {
    return (dispatch) => {
        addService(data)
            .then((service) => {
                dispatch({
                    type: types.addService,
                    payload: service
                })
                Swal.fire({
                    icon: "success",
                    position: "center",
                    text: "Servicio creado",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const findServices = () => {
    return (dispatch) => {
        getServices()
            .then((services) => {
                dispatch({
                    type: types.getServices,
                    payload: services
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const findServicesById = (id) => {
    return (dispatch) => {
        getService(id)
            .then((service) => {
                dispatch({
                    type: types.getService,
                    payload: service
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const searchServices = (title, location) => {
    return (dispatch) => {
        search(title, location)
            .then((services) => {
                console.log(services)
                dispatch({
                    type: types.searchServices,
                    payload: {
                        title: title,
                        location: location,
                        services: services,
                    }
                })
            })
            .catch((e) => {
                console.log(e);
            })
    }
}

export const searchReset = () =>{
    return({
        type: types.searchReset,
        payload: []
    })
}