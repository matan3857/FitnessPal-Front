import React from "react";
import { Link } from "react-router-dom";

export function PagePreview(props) {
  const { page } = props;
 
  return (
    <article className="page-preview">
      <Link to={`/${page.linkTo}`}>
        <div
          className="page-content"
          style={{background:'thistle'}}
          // style={{
          //   background: board.style.bgImg
          //     ? `url(${board.style.bgImg})`
          //     : board.style.bgClr,
          // }}
        ></div>
        <p className="page-title">{page.title}</p>
      </Link>
    </article>
  );
}
