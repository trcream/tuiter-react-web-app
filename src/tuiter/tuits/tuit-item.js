import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { BiX } from "react-icons/bi";
import { deleteTuit } from "../reducers/tuits-reducer";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img
            width={50}
            className="rounded-circle"
            src={`/images/${tuit.image}`}
            alt="Tuit Item"
          />
        </div>
        <div className="col-11">
          <div>
            <BiX
              className="float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            />
            <span className="fw-bold">{tuit.userName}</span>{" "}
            <i className="fa-solid fa-circle-check text-primary"></i> @
            {tuit.userName} - {tuit.time}
          </div>
          {/* <div className="fw-bolder">{tuit.topic}</div> */}
          <div>{tuit.title}</div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </li>
  );
};

export default TuitItem;
