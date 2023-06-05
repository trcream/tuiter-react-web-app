import React from "react";
// import TuitSummaryList from "../tuit-summary-list";
// import { AiOutlineSearch } from "react-icons/ai";
// import { GoGear } from "react-icons/go";
import WhatsHappening from "../whats-happening";
import "./index.css";
import TuitList from "../tuits";
function HomeScreenJS() {
  return (
    <>
      <h4>Home</h4>
      <WhatsHappening />
      <TuitList />
    </>
  );
}
export default HomeScreenJS;
