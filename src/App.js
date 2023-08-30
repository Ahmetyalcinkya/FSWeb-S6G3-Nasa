import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Picture from "./components/Picture";
import axios from "axios";

function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=VVMLFiVmAjFPFgG7FDTAqoijd9g4MbB8Y6Bsdeej"
      )
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="App">
      <Header />
      <Picture data={data} />
    </div>
  );
}

export default App;
