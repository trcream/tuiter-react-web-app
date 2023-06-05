// // Create a slice of state for tuits
// import { createSlice } from "@reduxjs/toolkit";
// import tuits from "./tuits.json";

// const currentUser = {
//   userName: "NASA",
//   handle: "@nasa",
//   image: "nasa.png",
// };

// const templateTuit = {
//   ...currentUser,
//   topic: "Space",
//   time: "2h",
//   liked: false,
//   replies: 0,
//   retuits: 0,
//   likes: 0,
// };

// const tuitsSlice = createSlice({
//   name: "tuits",
//   // initial state from tuits.json
//   initialState: { tuits: tuits },
//   // reducers to alter state, we have create state here
//   reducers: {
//     createTuit(state, action) {
//       state.tuits.unshift({
//         ...action.payload,
//         ...templateTuit,

//         // Generate a unique id for the tuit
//         _id: new Date().getTime(),
//       });
//     },
//   },
// });

// export const { createTuit } = tuitsSlice.actions;
// export default tuitsSlice.reducer;
