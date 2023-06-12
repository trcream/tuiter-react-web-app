import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProfileScreen from "./tuiter/user/profile-screen";
import LoginScreen from "./tuiter/user/login-screen";
import RegisterScreen from "./tuiter/user/register-screen";
import { Provider } from "react-redux";

import store from "./tuiter/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/labs" />} />
            <Route path="/labs/*" element={<Labs />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="/tuiter/*" element={<Tuiter />} />
            {/* <Route path="/tuiter/profile" element={<ProfileScreen />} /> */}
            <Route path="/tuiter/login" element={<LoginScreen />} />
            <Route path="/tuiter/register" element={<RegisterScreen />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
