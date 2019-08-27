import React from "react";

function NoImages(props) {
  return (
    <li className="no-imgs">
      <i className="material-icons icon-img">sentiment_very_dissatisfied</i>
      <h3>No Images match your search.</h3>
    </li>
  );
}

export default NoImages;
