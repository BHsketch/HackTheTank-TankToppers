import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
// import Form from "react-bootstrap/Form";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    user_name: "",
    phone_number: "",
    address: "",
    gender: "",
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

    console.log("clicked");
    axios
      .post("http://localhost:8800/signup", values)
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <div className="mb-3">
            <label htmlFor="user_name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Please enter your name"
              className="form-control rounded-0"
              onChange={handleInput}
              name="user_name"
              required
            />
            {errors.user_name && (
              <span className="text-danger">{errors.user_name}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phone_number">
              <strong>Contact Number</strong>
            </label>
            <input
              type="text"
              placeholder="Please enter your contact"
              className="form-control rounded-0"
              onChange={handleInput}
              name="phone_number"
              required
            />
            {errors.phone_number && (
              <span className="text-danger">{errors.phone_number}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="address">
              <strong>Address</strong>
            </label>
            <select
              className="form-select"
              id="addressSelect"
              onChange={handleInput}
              name="address"
              required
            >
              <option value="">Select State</option>
              <option value="gujarat">Gujarat</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="karnataka">Karnataka</option>
              <option value="tamilnadu">Tamil Nadu</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="uttarpradesh">Uttar Pradesh</option>
              <option value="punjab">Punjab</option>
              <option value="westbengal">West Bengal</option>
              <option value="madhyapradesh">Madhya Pradesh</option>
              <option value="bihar">Bihar</option>
              <option value="andhrapradesh">Andhra Pradesh</option>
              <option value="delhi">New Delhi</option>
              <option value="telangana">Telangana</option>
            </select>
            {errors.address && (
              <span className="text-danger">{errors.address}</span>
            )}
          </div>
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
              required
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div>
            <label for="genderSelect" class="form-label">
              <strong>Gender</strong>
            </label>
            <select
              className="form-select"
              id="genderSelect"
              onChange={handleInput}
              name="gender"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Please enter your password"
              className="form-control rounded-0"
              onChange={handleInput}
              name="password"
              required
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button className="btn btn-success w-100" type="submit">
            Sign Up
          </button>
          <p></p>
          <Link to="/login" className="btn btn-default border w-100">
            Log In to existing account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
