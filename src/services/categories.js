import axios from "axios";
import config from "../config/config";
const { app } = config();
const baseUrl = app.api;

const getCategories = async () =>{
    const url = `${baseUrl}/categories/?all=true`;
    const {data}= await axios.get(url);
    return data.docs;
}

export {getCategories}