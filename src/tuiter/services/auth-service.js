// REACT_APP_SERVER_API_URL=http://localhost:4000/api
// This is where data is getting send to the server

import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
// const SERVER_API_URL = "http://localhost:4000/api";
alert(SERVER_API_URL);

const USERS_URL = `${SERVER_API_URL}/users`;

const api = axios.create({ withCredentials: true });

export const login = async ({ username, password }) => {
  const response = await api.post(`${USERS_URL}/login`, { username, password });
  console.log("Auth Service Login Call");
  console.log(response.data);
  const user = response.data;
  return user;
};

export const logout = async () => {
  const response = await api.post(`${USERS_URL}/logout`);
  return response.data;
};
export const profile = async () => {
  const response = await api.post(`${USERS_URL}/profile`);
  return response.data;
};
export const updateUser = async (user) => {
  console.log("updateUser service called " + user._id);
  // const response = await api.put(`${USERS_URL}/${user._id}`, user);
  const response = await api.put(`${USERS_URL}/update/${user._id}`, user);
  console.log(`${USERS_URL}/${user._id}`);
  return response.data;
};
export const register = async ({ username, password }) => {
  const response = await api.post(`${USERS_URL}/register`, {
    username,
    password,
  });
  const user = response.data;
  return user;
};
