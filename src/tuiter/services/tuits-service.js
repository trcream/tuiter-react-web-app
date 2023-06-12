import axios from "axios";
// const TUITS_API = "http://localhost:4000/api/tuits";
// const TUITS_API = "https://tuiter-node-server-app-7ua3.onrender.com/api/tuits";
// const TUITS_API =
//   "https://tuiter-node-server-app-trcream.herokuapp.com/api/tuits";

const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
alert(TUITS_API);

export const createTuit = async (tuit) => {
  alert(JSON.stringify(tuit));
  const response = await axios.post(TUITS_API, tuit);
  return response.data;
};

export const findTuits = async () => {
  const response = await axios.get(TUITS_API);
  const tuits = response.data;
  return tuits;
};

export const deleteTuit = async (tid) => {
  //   alert("delteing tuit with id " + tid);
  const response = await axios.delete(`${TUITS_API}/${tid}`);
  return response.data;
};

export const updateTuit = async (tuit) => {
  const response = await axios.put(`${TUITS_API}/${tuit._id}`, tuit);
  return tuit;
};
