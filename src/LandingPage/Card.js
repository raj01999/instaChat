import React from "react";

export default function Card({ obj }) {
  // console.log(obj);
  const { name, location, likes, description, PostImage, date } = obj;

  return (
    <div className="card">
      <div className="head">
        <div className="name" style={{ marginTop: "8px" }}>
          <h3>{name}</h3>
          <p style={{ paddingBottom: "7px" }}>{location}</p>
        </div>
        <div className="more">...</div>
      </div>

      <div style={{ width: "100%", height: "60%" }}>
        <img
          src={process.env.REACT_APP_API + "/image/" + PostImage}
          alt="img"
          className="post-img"
        />
      </div>

      <div className="foot">
        <div>
          <span>{"\u2661"}</span>
          <span>{"\u27A2"}</span>
        </div>
        <div className="date">{date.split("GMT")[0]}</div>
      </div>

      <div className="like-content">
        <p>{likes} likes</p>
        <p className="content">{description}</p>
      </div>
    </div>
  );
}