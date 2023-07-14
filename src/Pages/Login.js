import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => {
      return {
        ...prev,
        [e.target.name]: [e.target.value],
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(Validation(values));

    console.log("clicked");
    axios
      .post("http://localhost:8800/login", values)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          const user_id = res.data.user_id;
          localStorage.setItem("user_id", user_id);
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Please enter your email"
              className="form-control rounded-0"
              onChange={handleInput}
              name="email"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Please enter your password"
              className="form-control rounded-0"
              onChange={handleInput}
              name="password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button className="btn btn-success w-100" type="submit">
            Log In
          </button>
          <p></p>
          <Link to="/signup" className="btn btn-default border w-100">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
