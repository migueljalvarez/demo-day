import axios from "axios";
import config from "../config/config";
import jwtDecode from "jwt-decode";
const { app } = config();
const baseUrl = app.api;

const login = async (data) => {
  const url = `${baseUrl}/login`;
  const result = await axios.post(url, data);
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

export { login };
