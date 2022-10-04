import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import { makeToken } from "../utils/helper";

const Login = () => {
  const navigation = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleLogin = () => {
    const { username, password } = data;
    if (!(username.trim() && password.trim())) {
      setError("Missing password or password");
      return;
    }
    if (username === "demo" && password === "demo") {
      const token = makeToken(13);
      localStorage.setItem("demo", token);
      navigation("/");
      return;
    }
    setError("Password or password not correct");
    return;
  };
  return (
    <div className="login__wrapper">
      <div className="login__block">
        <h1 className="login__heading">Login</h1>
        <p className="login__error">{error}</p>
        <input
          type="text"
          className="login__input"
          onChange={handleChange}
          name="username"
        />
        <input
          type="password"
          className="login__input"
          onChange={handleChange}
          name="password"
        />
        <button className="login__button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
