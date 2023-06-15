import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import store from "../store";
import {
  profileThunk,
  logoutThunk,
  updateUserThunk,
} from "../services/auth-thunks";
function ProfileScreen() {
  const { currentUser } = useSelector((state) => state.user);
  // console.log("current user with state is: ", currentUser);

  const [profile, setProfile] = useState(currentUser);
  // console.log("current profile is: ", profile);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const save = async () => {
    // await dispatch(updateUserThunk(profile));
    // const { payload } = await dispatch(profileThunk());
    // setProfile(payload);

    // Sending the updated profile to thunk which wraps the service call to the server
    dispatch(updateUserThunk(profile));
    // Updating the profile state with the updated profile
    console.log(profile);
    setProfile(profile);
  };

  useEffect(() => {
    const fetchData = async () => {
      const { payload } = await dispatch(profileThunk());
      console.log("use effect payload" + payload);
      setProfile(payload);
    };
    fetchData();
  }, []);

  // useEffect(async () => {
  //   const { payload } = await dispatch(profileThunk());
  //   setProfile(payload);
  // }, []);
  // console.log(profile);
  return (
    <div className="row">
      <div>
        <h1>Profile Screen</h1>
        {profile && (
          <div>
            <div>
              <h4> Current User: {profile.username || ""}</h4>
              <label>First Name</label>
              <input
                type="text"
                value={profile.firstName}
                onChange={(event) => {
                  const newProfile = {
                    ...profile,
                    firstName: event.target.value,
                  };
                  setProfile(newProfile);
                }}
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                value={profile.lastName || ""}
                onChange={(event) => {
                  const newProfile = {
                    ...profile,
                    lastName: event.target.value,
                  };
                  setProfile(newProfile);
                }}
              />
            </div>
          </div>
        )}
        <button
          onClick={() => {
            dispatch(logoutThunk());
            navigate("/tuiter/login");
          }}
        >
          {" "}
          Logout
        </button>
        <button onClick={save}>Save </button>
      </div>
    </div>
  );
}
export default ProfileScreen;
