import React, { useState } from "react";

const TuitStats = ({ tuit }) => {
  // Grabbing the tuit.likes
  const [likes, setLikes] = useState(tuit.likes);
  // Grabbing the default state to see if the tuit is liked or now
  const [liked, setLiked] = useState(tuit.liked);

  const increaseLikes = () => {
    // Already liked so decrement by one
    if (liked) {
      setLikes((likes) => likes - 1);
      // Not yet liked so increase by one
    } else {
      setLikes((likes) => likes + 1);
    }
    // Toggle the liked state
    setLiked(!liked);
  };

  return (
    <div className="row">
      <div className="col-3 mt-2">
        <i class="fa-regular fa-comment mx-1"></i> {tuit.replies}
      </div>
      <div className="col-3 mt-2">
        <i class="fa-solid fa-retweet mx-1"></i>
        {tuit.retuits}
      </div>
      <div className="col-3 mt-2" onClick={increaseLikes}>
        {/* If the tuit is liked, show the solid red heart, if not, show the regular
        heart */}
        <i
          className={liked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
          // Set the heart styling to red if the tuit is liked
          style={{ color: liked ? "#df0c0c" : "" }}
        ></i>{" "}
        {likes}
      </div>
      <div className="col-3 mt-2">
        <i class="fa-solid fa-arrow-up-from-bracket"></i>
      </div>
    </div>
  );
};

export default TuitStats;
