// REACT_APP_SERVER_API_URL=http://localhost:4000/api
// This is where data is getting send to the server

import axios from "axios";
// const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
// const SERVER_API_URL =
//   "https://tuiter-node-server-app-trcream.herokuapp.com/api/";

const SERVER_API_URL = "https://tuiter-node-server-app-7ua3.onrender.com/api/";

// const SERVER_API_URL = "http://localhost:4000/api/";

// const USERS_URL = `${SERVER_API_URL}/users`;
const USERS_URL = `${SERVER_API_URL}users`;

alert("Users Url:" + USERS_URL);

const api = axios.create({
  baseURL: SERVER_API_URL,
  withCredentials: true,
});

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
