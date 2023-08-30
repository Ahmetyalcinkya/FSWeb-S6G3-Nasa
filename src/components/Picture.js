import React from "react";
import "./Picture.css";

export default function Picture(props) {
  const { data } = props;
  return (
    <div>
      <div className="nasa-picture">
        <h3 className="p-title"> {data.title}</h3>
        <img className="img" src={data.url}></img>
        <h4 className="copyright">{data.copyright}</h4>
        <p className="date"> {data.date} </p>
        <p className="text"> {data.explanation} </p>
      </div>
    </div>
  );
}
