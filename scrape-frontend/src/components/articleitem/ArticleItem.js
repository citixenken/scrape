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
  //======================
  function handleFavState() {
    setFavState((favState) => !favState);
  }

  return (
    <div className="item">
      <a
        className="header"
        href={web_url}
        target="_blank"
        style={{
          fontSize: 24,
          fontFamily: "Varela Round",
        }}
      >
        <i className="linkify icon"></i>
        {title}
      </a>
      <br />
      <div className="content">
        <p className="description">{byline}</p>
        {allowEdit ? (
          <EditArticle
            id={id}
            author={author}
            title={title}
            web_url={web_url}
            byline={byline}
            date_published={date_published}
            onUpdateArticle={handleArticleUpdate}
          />
        ) : (
          <p className="description">{author}</p>
        )}

        <p className="description">Written on: {date_published}</p>
        <br />
        <div class="right floated content">
          <div class="ui button">
            <a href={web_url} target="_blank">
              View Story
            </a>
          </div>
        </div>
      </div>

      {/* FAV BUTTON */}
      <button
        className="ui submit primary button left floated"
        onClick={handleFavState}
      >
        {favState ? "❤️ Favorite" : "🤍 Favorite"}
      </button>

      {/* UPDATE BUTTON */}
      <button
        className="ui submit secondary button left floated"
        onClick={() => setAllowEdit((allowEdit) => !allowEdit)}
      >
        {/* <span role="img" aria-label="edit">
          ✏️
        </span> */}
        ✎ Edit
      </button>

      {/* DELETE BUTTON */}
      <button
        className="ui submit primary button left floated"
        onClick={handleArticleDelete}
      >
        {/* <span role="img" aria-label="delete">
          🗑
        </span> */}
        🗑 Delete
      </button>
    </div>
  );
}

export default ArticleItem;
