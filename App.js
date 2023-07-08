import "./App.css";
import Graph from "./Graph";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [scholarshipId, setScholarshipId] = useState(null); // Declare scholarshipId in the component's state

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const books = await axios.get("http://localhost:8800/books");
        const fetchedScholarshipId = books.data[0].id;
        setScholarshipId(fetchedScholarshipId); // Update scholarshipId in the state
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div className="App">
      {scholarshipId && <Graph scholarshipId={scholarshipId} />}{" "}
      {/* Render the Graph component once scholarshipId is available */}
    </div>
  );
}

export default App;
