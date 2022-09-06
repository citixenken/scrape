import React from "react";

const ArticleItem = ({ article }) => {
  const { id, title, web_url, byline, author, date_published } = article;
  return (
    <div>
      <a href={web_url} target="_blank">
        {title}
      </a>
      <br />
      <small>{byline}</small>
      <p>
        Written by: {author} on {date_published}
      </p>
      <br />
    </div>
  );
};

export default ArticleItem;
