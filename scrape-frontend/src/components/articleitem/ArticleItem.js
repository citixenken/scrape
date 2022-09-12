import "./ArticleItem.css";
import React, { useState } from "react";
import EditArticle from "../editarticle/EditArticle";
import { Link } from "react-router-dom";

function ArticleItem({ article, onDeleteArticle, onUpdateArticle }) {
  const { id, title, web_url, byline, author, date_published } = article;
  const [allowEdit, setAllowEdit] = useState(false);
  const [favState, setFavState] = useState("");

  const URL = `${process.env.REACT_APP_API_URL}/articles/${id}`;

  //DELETE FROM DB
  //==============
  function handleArticleDelete() {
    fetch(URL, { method: "DELETE" })
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
    <div className="ui very padded tertiary segment item">
      <a
        className="header"
        href={web_url}
        target="_blank"
        style={{
          fontSize: 24,
          fontFamily: "Varela Round",
          padding: 20,
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
        <div className="right floated content">
          <div className="ui animated fade teal button">
            <div className="visible content">View Story</div>
            <a href={web_url} target="_blank">
              <div className="hidden content">
                <i className="right arrow icon"></i>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* FAV BUTTON */}
      <button
        className="ui submit primary button left floated"
        // className="ui labeled icon button"
        onClick={handleFavState}
      >
        {/* <i className="heart outline icon"></i> */}
        {favState ? "❤️ Favorite" : "🤍 Favorite"}
      </button>

      {/* UPDATE BUTTON */}
      <button
        className="ui submit grey button left floated"
        onClick={() => setAllowEdit((allowEdit) => !allowEdit)}
      >
        <i className="edit icon"></i>
        {/* <span role="img" aria-label="edit">
          ✏️
        </span> */}
        Edit
      </button>

      {/* DELETE BUTTON */}
      <button
        className="ui submit red button left floated"
        onClick={handleArticleDelete}
      >
        <i className="delete icon"></i>
        {/* <span role="img" aria-label="delete">
          🗑
        </span> */}
        Delete
      </button>
    </div>
  );
}

export default ArticleItem;
