import { Routes, Route } from "react-router";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import ExploreScreen from "./explore-screen";
import BookmarksScreen from "./bookmarks-screen";
// import ProfileScreen from "./profile-screen";
import ProfileScreen from "./user/profile-screen";
// import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
// import TuitSummaryList from "./tuit-summary-list";
import ExploreScreenJS from "./explore-screen";
import HomeScreenJS from "./home-screen";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import authReducer from "./services/auth-reducer";

// who is the name of the key and whoReducer is the value which is a function
const store = configureStore({
  reducer: {
    who: whoReducer,
    tuits: tuitsReducer,
    user: authReducer,
  },
});
function Tuiter() {
  return (
    // providing the store to the rest of the app
    // Any component can now reture the store/stateusing the useStore hook
    <Provider store={store}>
      <div>
        <Nav />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-7">
            <Routes>
              <Route path="/home" element={<HomeScreenJS />} />
              <Route path="/explore" element={<ExploreScreenJS />} />
              <Route path="/bookmarks" element={<BookmarksScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          </div>
          <div className="col-3">
            <WhoToFollowList />
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Tuiter;
