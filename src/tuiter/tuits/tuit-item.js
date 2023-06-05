import React from "react";
import TuitStats from "./tuit-stats";

const TuitItem = ({ tuit }) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-1">
          <img
            width={50}
            height={50}
            className="rounded-circle"
            src={`/images/${tuit.image}`}
            alt="Tuit Item"
          />
        </div>
        <div className="col-11">
          <div>
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
