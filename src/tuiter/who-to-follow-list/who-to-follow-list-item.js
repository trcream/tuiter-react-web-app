import React from "react";
const WhoToFollowListItem = ({
  who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa.png" },
}) => {
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-lg-2 col-sm-1">
          <img
            className="rounded-circle ratio-1x1 "
            height={48}
            width={48}
            mx={2}
            src={`/images/${who.avatarIcon}`}
          />
        </div>
        <div className="col-lg-8 col-sm-11">
          <div className="fw-bold">{who.userName}</div>
          <div>@{who.handle}</div>
        </div>
        <div className="col-lg-2 d-none d-md-block">
          <button className="btn btn-primary rounded-pill float-end">
            Follow
          </button>
        </div>
      </div>
    </li>
  );
};
export default WhoToFollowListItem;
