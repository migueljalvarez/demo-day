import axios from "axios";
import config from "../config/config";
import jwtDecode from "jwt-decode";
const { app } = config();
const baseUrl = app.api;

const login = async (data) => {
  console.log(data);
  const url = `${baseUrl}/login`;
  const result = await axios.post(url, data);
  console.log(result.data.token);
  localStorage.setItem("token", result.data.token);
  const token = localStorage.getItem("token");
  const decodeToken = jwtDecode(token);
  const { id, displayName, imageUrl } = decodeToken;

  return {
    id: id,
    displayName: displayName,
    imageUrl: imageUrl,
  };
};
const signup = async (data) => {
  console.log(data.user)
  const url = `${baseUrl}/signup`;
  const result =  await axios.post(url, data.user, {
    headers: { "Access-Control-Allow-Origin": "*" }
  })
  console.log(result.data.token);
  localStorage.setItem("token", result.data.token);
  const token = localStorage.getItem("token");
  const decodeToken = jwtDecode(token);
  const { id, displayName, imageUrl } = decodeToken;

  return {
    id: id,
    displayName: displayName,
    imageUrl: imageUrl,
  };
};

export { login, signup };
