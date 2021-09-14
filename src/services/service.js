import axios from "axios";
import config from "../config/config";
const { app } = config();
const baseUrl = app.api;

const getServices = async () =>{
    const url = `${baseUrl}/services/`;
    const { data } = await axios.get(url);
    return data;
}

const getService = async (id) =>{
  const url = `${baseUrl}/services/${id}`;
  const { data } = await axios.get(url);
  return data;
}

const addService = async (body) => {
    const url = `${baseUrl}/services/`;
  const result  = await axios.patch(url, body, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  return result.data;
}

export {getServices,getService, addService}