import React from "react";

export default function Card({ avatar, name, created }) {
  return (
    <div className="github-profile">
      <img src={avatar} alt="github pic" />
      <div className="info">
        <div className="name">{name}</div>
        <div className="created">created at: {created}</div>
      </div>
    </div>
  );
}
