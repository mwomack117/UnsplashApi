import React from "react";
import Img from "./Img";
import NoImages from "./NoImages";

function ImageList(props) {
  const results = props.data;
  let images;
  if (results.length > 0) {
    images = results
      .filter(img => img.width > img.height)
      .map(img => (
        <Img
          src={img.urls.small}
          user={img.user.links.html}
          name={img.user.name}
          link={img.links.html}
          key={img.id}
        />
      ));
  } else {
    images = <NoImages />;
  }
  return <div className="img-list">{images}</div>;
}

export default ImageList;
