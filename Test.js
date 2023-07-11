import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const books = await axios.get("http://localhost:8800/books");
        console.log(books);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);
  return <div>Test</div>;
}

export default Test;
