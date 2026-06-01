import {
  Link,
  useNavigate
} from "react-router-dom";

import "./Navbar.css";

function Navbar() {

  const navigate =
    useNavigate();

  const token =
    localStorage.getItem(
      "token"
    );

  const handleDashboard =
    () => {

      if (!token) {

        alert(
          "Please Login First "
        );

        navigate("/login");

        return;

      }

      navigate("/dashboard");

    };

  const handleLogout =
    () => {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "userEmail"
      );

      localStorage.removeItem(
        "userName"
      );

      alert(
        "Logout Successful "
      );

      navigate("/");

    };

  return (

    <nav className="navbar">

      {/* Logo */}
      <div className="logo">

        <h1>
          Active<span>Pulse</span>
        </h1>

        <p>
          Transform Your Body
        </p>

      </div>

      {/* Nav Links */}
      <ul className="nav-links">

        <li>

          <Link to="/">
            Home
          </Link>

        </li>

        <li>

          <button
            className="dashboard-btn"
            onClick={
              handleDashboard
            }
          >
            Dashboard
          </button>

        </li>

        {!token ? (

          <>

            <li>

              <Link
                to="/register"
                className="register-btn"
              >
                Register
              </Link>

            </li>

            <li>

              <Link
                to="/login"
                className="login-btn"
              >
                Login
              </Link>

            </li>

          </>

        ) : (

          <li>

            <button
              className="logout-btn"
              onClick={
                handleLogout
              }
            >
              Logout
            </button>

          </li>

        )}

      </ul>

    </nav>

  );

}

export default Navbar;
