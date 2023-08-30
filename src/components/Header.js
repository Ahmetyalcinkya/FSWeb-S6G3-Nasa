import React from "react";
import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [date, setdate] = useState(new Date());
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const currentDate = `${day}/${month}/${year}`;

  return (
    <div className="container">
      <header className="header-container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg"
          alt=""
          className="picture"
        />
        <h1>Photo Of The Day</h1>
        <div className="p-container">
          <p>Tarih : {currentDate}</p>
          <p>Ahmet Can Yalçınkaya</p>
        </div>
      </header>
    </div>
  );
}
