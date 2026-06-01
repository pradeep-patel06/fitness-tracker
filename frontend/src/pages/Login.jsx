import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api";
import "../styles/Login.css";
import {
  signInWithPopup
} from "firebase/auth";

import {
  auth,
  provider
} from "../firebase";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post(
        "/auth/login",
        {
          email,
          password
        }
      );

      
      localStorage.setItem(
        "token",
        res.data.token
      );

      localStorage.setItem(
        "userEmail",
        email
      );

      localStorage.setItem(
        "userName",
        email.split("@")[0]
      );

      alert(
        "Login Successful "
      );

      
      navigate("/");

    } catch (err) {

      console.log(err);

      alert(
        "Invalid Credentials"
      );

    }

  };

  const handleGoogleLogin =
    async () => {

      try {

        const result =
          await signInWithPopup(
            auth,
            provider
          );

        const user =
          result.user;

        localStorage.setItem(
          "token",
          user.accessToken
        );

        localStorage.setItem(
          "userName",
          user.displayName
        );

        localStorage.setItem(
          "userEmail",
          user.email
        );

        localStorage.setItem(
          "profileImage",
          user.photoURL
        );

        alert(
          "Google Login Successful "
        );

        navigate("/dashboard");

      } catch (error) {

        console.log(error);

        alert(
          "Google Login Failed"
        );

      }

    };

  return (

    <div className="login-page">

      <div className="login-container">

        <form
          className="login-box"
          onSubmit={handleLogin}
        >

          <h2>
            Welcome Back
          </h2>

          <p className="subtitle">
            Login to continue your journey
          </p>

          <label>
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <label>
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="login-btn-main"
          >
            Login
          </button>

          <button
            type="button"
            className="google-btn"
            onClick={handleGoogleLogin}
          >

            Continue with Google 

          </button>

          <p className="bottom-text">

            Don't have an account?

            <span
              onClick={() =>
                navigate("/register")
              }
            >
              Register
            </span>

          </p>

        </form>

      </div>

    </div>

  );

}

export default Login;