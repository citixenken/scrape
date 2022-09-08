import "./ArticleItem.css";
import React, { useState } from "react";
import EditArticle from "../editarticle/EditArticle";
import { Link } from "react-router-dom";

function ArticleItem({ article, onDeleteArticle, onUpdateArticle }) {
  const { id, title, web_url, byline, author, date_published } = article;
  const [allowEdit, setAllowEdit] = useState(false);
  const [favState, setFavState] = useState("");

  //DELETE FROM DB
  //==============
  function handleArticleDelete() {
    fetch(`http://localhost:9292/articles/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() => onDeleteArticle(article))
      .catch((err) => console.error(err));
  }

  // UPDATE ARTICLE
  // ==============
  function handleArticleUpdate(updatedArticle) {
    setAllowEdit(false);
    onUpdateArticle(updatedArticle);
  }

  //FAVOURITE ARTICLE ITEM
  //===================
  function handleFavState() {
    setFavState((favState) => !favState);
  }

  return (
    <li>
      <a href={web_url} target="_blank">
        {title}
      </a>
      <br />
      <small>{byline}</small>
      {allowEdit ? (
        <EditArticle
          id={id}
          author={author}
          onUpdateArticle={handleArticleUpdate}
        />
      ) : (
        <p>{author}</p>
      )}

      <p>Written on: {date_published}</p>
      <br />

      <button
        className="ui submit primary button left floated"
        onClick={handleFavState}
      >
        {favState ? "❤️Favorite" : "🤍Favorite"}
      </button>

      {/* DELETE ARTICLE */}
      {/* <button
        onClick={handleArticleDelete}
        className="ui submit basic red button right floated"
        style={{ color: "red" }}
      >
        Delete
      </button> */}

      {/* UPDATE TITLE */}
      <button onClick={() => setAllowEdit((allowEdit) => !allowEdit)}>
        <span role="img" aria-label="edit">
          ✏️
        </span>
      </button>

      <button onClick={handleArticleDelete}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </li>
  );
}

export default ArticleItem;
