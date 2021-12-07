import React from "react";
import { Link } from "react-router-dom";

export function PagePreview(props) {
  const { page } = props;

  return (
    <article className="page-preview">
      <Link to={`/${page.linkTo}`}>
        <div className="page-content">
          <p className="page-title">{page.title}</p>
        </div>
      </Link>
    </article>
  );
}
