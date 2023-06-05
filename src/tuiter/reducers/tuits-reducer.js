// Create a slice of state for tuits
import { createSlice } from "@reduxjs/toolkit";
import tuits from "./tuits.json";

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "nasa.png",
};

const templateTuit = {
  ...currentUser,
  title: "this should work",
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  // initial state from tuits.json
  initialState: { tuits: tuits },
  // reducers to alter state, we have create state here
  reducers: {
    deleteTuit(state, action) {
      const index = state.tuits.findIndex(
        (tuit) => tuit._id === action.payload
      );
      state.tuits.splice(index, 1);
    },
    createTuit(state, action) {
      console.log("TESTING action.payload", action.payload);
      state.tuits.unshift({
        ...action.payload,
        ...templateTuit,
        // Updated to reflect what the user is inputing
        // This is really title data although we ar just calling it tuit data
        title: action.payload.tuit,

        // Generate a unique id for the tuit
        _id: new Date().getTime(),
      });
    },
  },
});

export const { createTuit, deleteTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
