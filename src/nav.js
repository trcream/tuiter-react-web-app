import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// const { currentUser } = useSelector((state) => state.user);

function Nav() {
  return (
    <nav className="nav nav-tabs mb-2">
      <Link className="nav-link" to="/labs/a3">
        A3
      </Link>
      <Link className="nav-link" to="/labs/a4">
        A4
      </Link>
      <Link className="nav-link" to="/hello">
        Hello
      </Link>
      <Link className="nav-link" to="/tuiter">
        Tuiter
      </Link>

      <Link className="nav-link" to="/login">
        Login
      </Link>

      <Link className="nav-link" to="/register">
        Register
      </Link>

      <Link className="nav-link" to="/profile">
        Profile
      </Link>
    </nav>
  );
}

export default Nav;
