import React from "react";
// import tuitsArray from "./tuits.json";
import TuitSummaryItem from "./tuit-summary-item";
import { useSelector } from "react-redux";

const TuitSummaryList = () => {
  // Extracting data from the store - tuits is the name of the key
  // Data rerenders when the store changes
  const tuits = useSelector((state) => state.tuits.tuits);
  return (
    <ul className="list-group">
      {tuits.map((tuit) => (
        <TuitSummaryItem key={tuit._id} tuit={tuit} />
      ))}
    </ul>
  );
};
export default TuitSummaryList;
