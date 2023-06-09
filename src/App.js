import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes, Route } from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProfileScreen from "./tuiter/user/profile-screen";
import LoginScreen from "./tuiter/user/login-screen";
import RegisterScreen from "./tuiter/user/register-screen";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/labs" />} />
          <Route path="/labs/*" element={<Labs />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/tuiter/*" element={<Tuiter />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegisterScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
