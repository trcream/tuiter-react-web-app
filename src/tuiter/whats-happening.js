import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { MdGif } from "react-icons/md";
import { MdFormatListBulleted } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiBold, BiItalic } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";

//  importing the create tuit reducer
// import { createTuit, deleteTuit } from "./reducers/tuits-reducer";
import { createTuitThunk } from "./services/tuits-thunks";

// Used to dispatch actions to the store
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  // Setting state to an empty string initially
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    const newTuit = {
      title: whatsHappening,

      // tuit: whatsHappening,
    };
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");
  };
  return (
    <div className="row">
      <div className="col-auto">
        <img src="/images/nasa.png" width={60} />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          //Updating teh state with the value of the textarea
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            // Calling the tuitClickHandler method when the button is clicked
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <AiOutlinePicture className="me-3" />
            <MdGif className="me-3" />
            <FiBarChart2 className="me-3" />
            {/* <MdFormatListBulleted className="me-3" /> */}
            <BsEmojiSmile className="me-3" />
            {/* <FaCalendarAlt className="me-3" /> */}
            <HiOutlineLocationMarker className="me-3" />
            {/* <BiBold className="me-3" />
            <BiItalic className="me-3" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default WhatsHappening;
