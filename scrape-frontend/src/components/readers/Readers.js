import "./Readers.css";
import React, { useState, useEffect } from "react";
import ReaderItem from "../ReaderItem";

const Readers = () => {
  const [readers, setReaders] = useState([]);

  // const URL = "http://localhost:9292/readers";
  const URL = `${process.env.REACT_APP_API_URL}/readers`;

  // CREATE (READ) READERS
  // =====================
  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((readers) => setReaders(readers))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      {readers.map((reader) => (
        <ReaderItem key={reader.id} reader={reader} />
      ))}
    </div>
  );
};

export default Readers;
