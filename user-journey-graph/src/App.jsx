import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Loader.css";
import Intermediate from "./Intermediate";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Scholarships from "./Pages/Scholarships";
import Scholarship1 from "./Pages/Scholarship1";
import Scholarship2 from "./Pages/Scholarship2";
import Bookmark from "./Pages/Bookmark";
import Terms from "./Pages/Terms";
import Apply from "./Pages/Apply";
import Ineligible from "./Pages/Ineligible";
import Incomplete from "./Pages/Incomplete";
import Submit from "./Pages/Submit";
import Fail from "./Pages/Fail";
import Success from "./Pages/Success";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>User Journey Graph</h1>
              </>
            }
          />
          <Route path="/:scholarshipId" element={<Intermediate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/scholarship1" element={<Scholarship1 />} />
          <Route path="/scholarship2" element={<Scholarship2 />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/ineligible" element={<Ineligible />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/incomplete" element={<Incomplete />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/fail" element={<Fail />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
