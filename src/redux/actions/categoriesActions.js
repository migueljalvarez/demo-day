import { getCategories } from "../../services/categories";
import { types } from "../types/types";

export const findCategories = () => {
    return (dispatch) => {
        getCategories().then((categories) => {
            dispatch({
                type: types.getCategories,
                payload: categories,
            });
        });
    };

}