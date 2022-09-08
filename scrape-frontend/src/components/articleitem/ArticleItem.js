import React, { useState } from "react";
import { Link } from "react-router-dom";

const ArticleItem = ({ article, onDeleteArticle }) => {
  const { id, title, web_url, byline, author, date_published } = article;
  const [favState, setFavState] = useState("");

  //DELETE FROM DB
  //==============
  function handleArticleDelete() {
    fetch(`http://localhost:9292/articles/${article.id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => onDeleteArticle(article))
      .catch((err) => console.error(err));
  }

  //FAVOURITE ARTICLE ITEM
  //===================
  function handleFavState() {
    setFavState((favState) => !favState);
  }

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
      <button
        className="ui submit primary button left floated"
        onClick={handleFavState}
      >
        {favState ? "❤️Favorite" : "🤍Favorite"}
      </button>

      {/* DELETE BOOK */}
      <button
        onClick={handleArticleDelete}
        className="ui submit basic red button right floated"
        style={{ color: "red" }}
      >
        Delete
      </button>
    </div>
  );
};

export default ArticleItem;
