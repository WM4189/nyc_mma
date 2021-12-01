import React, { useState } from "react";
import { Redirect, useHistory, NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  borderRadius: "20px",
  width: "100px",
  padding: "5px",
  margin: "0 6px 6px",
  background: "transparent",
  textDecoration: "none",
  color: "black",
  backgroundColor: "transparent",
  transition:
    "background-color .15s ease-in-out, border .15s ease-in-out, color .15s ease-in-out",
};

function Login({ setCurrentUser }) {
  const history = useHistory();
  const [username, setUsername] = useState("Guest");
  const [password, setPassword] = useState("password");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          history.push("/home");
        });
      } else {
        setCurrentUser({
          username: "Guest",
          email: "Guest",
          password: "password",
          journal: "Training Journal Entries!!!!!!",
        });
        history.push("/home");
        res.json().then((errors) => {
          console.error(errors);
        });
      }
    });
  };
  return (
    <div className="authForm">
      <Redirect to="/" />
      <form onSubmit={handleSubmit}>
        <strong id="login">NYC MMA</strong>
        <p>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
        <p>
          <button type="submit">Log In</button>
        </p>
        <p>-- or --</p>
        <p>
          <NavLink to="/signup" style={linkStyles}>
            Sign Up
          </NavLink>
        </p>
      </form>
    </div>
  );
}

export default Login;
