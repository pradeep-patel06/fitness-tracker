import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api";
import "../styles/Register.css";

function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", {
        name: username,
        email,
        password
      });

      alert("Registration Successful ");

      navigate("/login");

    } catch (err) {

      console.log(err);

      alert("Registration Failed");
    }
  };

  return (
    <div className="register-page">

      <div className="register-container">

        <form
          className="register-box"
          onSubmit={handleRegister}
        >

          <h2>Register</h2>

          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter email"
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Register
          </button>

          
          <button
            type="button"
            className="google-btn"
            onClick={() =>
              alert("Google Login Coming Soon ")
            }
          >
            Login with Google
          </button>

         
          <p className="bottom-text">

            Already have an account?

            <span
              onClick={() => navigate("/login")}
            >
              Login
            </span>

          </p>

        </form>

      </div>

    </div>
  );
}

export default Register;