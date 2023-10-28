import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AdminDashboard() {
  const navigate = useNavigate();
  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    flexDirection: "column",
    backgroundColor: "white",
  };

  const handleButton1Click = () => {
    navigate("/s1");
  };
  const handleButton2Click = () => {
    navigate("/s2");
  };
  const handleTableauButtonClick = () => {
    window.location.href =
      "https://public.tableau.com/app/profile/himanshu.thakur3811/viz/UserJourneyAnalysis_16903833304360/UserAnalysis";
  };

  const handleLogout = () => {
    toast.success("Logged out!");
    navigate("/login");
  };

  return (
    <div style={buttonContainerStyle}>
      <div style={{ position: "absolute", top: "10px", right: "10px" }}>
        <Button variant="contained" color="primary" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <h1>Admin Dashboard</h1>
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "10px" }}
        onClick={handleButton1Click}
      >
        Scholarship 1
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "10px" }}
        onClick={handleButton2Click}
      >
        Scholarship 2
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "10px" }}
        onClick={handleTableauButtonClick}
      >
        Tableau Dashboard
      </Button>
    </div>
  );
}

export default AdminDashboard;
