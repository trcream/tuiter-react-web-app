import React from "react";
// import tuitsArray from "./tuits.json";
import TuitItem from "./tuit-item";
import { useSelector } from "react-redux";

const TuitList = () => {
  // Grabbing form the store .json file
  const tuits = useSelector((state) => state.tuits.tuits);
  return (
    <ul className="list-group">
      {tuits.map((tuit) => (
        // Extracting data from the store - tuits is the name of the key
        // Data rerenders when the store changes
        <TuitItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitList;
