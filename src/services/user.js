import axios from "axios";
import config from "../config/config";
const { app } = config();
const baseUrl = app.api;

const getProfile = async (id) => {
  const url = `${baseUrl}/users/${id}`;
  const { data } = await axios.get(url);
  return data;
};
const getProfiles = async () => {
  const url = `${baseUrl}/users/?limit=4`;
  const { data } = await axios.get(url);
  return data.docs;
};

const updateProfile = async (id, body) => {
  const url = `${baseUrl}/users/${id}`;
  const result  = await axios.patch(url, body, {
    headers: { "Access-Control-Allow-Origin": "*" },
  });
  console.log(result)
  return result.data;
};
export { getProfile, getProfiles, updateProfile };
