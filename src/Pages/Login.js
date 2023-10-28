import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Validation from "./LoginValidation";
import axios from "axios";
import "./login.css";
import { toast } from "react-toastify";
import logo from "./images/logo.png";

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
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming that you want to check if email is 'admin@scholify.com' and password is 'scholify' for admin access.
    if (
      values.email === "admin@scholify.com" &&
      values.password === "scholify"
    ) {
      navigate("/admin");
    } else {
      axios
        .post("http://localhost:8800/login", values)
        .then((res) => {
          if (res.data.success) {
            const user_id = res.data.user_id;
            localStorage.setItem("user_id", user_id);
            toast.success("Logged in!");
            console.log(values.email);
            console.log(values.password);
            console.log(values.email === "admin@scholify.com");
            console.log(values.password === "scholify");
            if (
              values.email === "admin@scholify.com" &&
              values.password === "scholify"
            ) {
              console.log("here");
              navigate("/admin");
            } else {
              console.log("there");
              navigate("/home");
            }
          } else {
            toast.error("Invalid email or password, try again!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <body>
      <div className="outer">
        <div className="logindiv">
          <div className="title">
            <div className="logo">
              <img src={logo} alt="logo" height="100px" width="100px" />
            </div>
            <div className="companynamediv">
              <p className="companyName">Scholify</p>
            </div>
          </div>

          <hr />

          <form onSubmit={handleSubmit}>
            <div className="info">
              <label htmlFor="email">
                <p>Email</p>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleInput}
                placeholder="Type your email here"
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>

            <div className="info">
              <label htmlFor="password">
                <p>Password</p>
              </label>
              <input
                type="password"
                name="password"
                onChange={handleInput}
                placeholder="Type your password here"
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>

            <div className="button">
              <div className="buttonlink">
                <button type="submit">
                  <p>Sign in</p>
                </button>

                <button>
                  <Link to="/signup" style={{ textDecoration: "none" }}>
                    <p>Create Account</p>
                  </Link>
                </button>
              </div>
            </div>
          </form>

          {/* <form onSubmit={handleSubmit}>
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
        </form> */}
        </div>
      </div>
    </body>
  );
}

export default Login;
