import React from "react";

function Img(props) {
  return (
    <div className="image-card">
      <a href={props.link}>
        <img className="idv-image" src={props.src} alt="upsplash pic" />
      </a>
      <ul>
        <li>
          <a href={props.user}>{props.name}</a>
        </li>
        <li>
          <a href={props.link}>See on Upsplash</a>
        </li>
      </ul>
    </div>
  );
}

export default Img;
