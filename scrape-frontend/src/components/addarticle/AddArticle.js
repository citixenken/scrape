import React, { useState, useEffect } from "react";
import NewArticleForm from "../NewArticleForm";

const AddArticle = () => {
  const [articles, setArticles] = useState([]);
  const [showArticleForm, setShowArticleForm] = useState(false);

  //  DISPLAY NEW ARTICLE FORM
  // =========================
  function handleToggleArticleButton() {
    setShowArticleForm((showArticleForm) => !showArticleForm);
  }

  // POST NEW ARTICLE TO LOCAL DB
  // ============================
  function handleNewArticle(newArticle) {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArticle),
    };
    fetch("http://localhost:9292/articles", options)
      .then((res) => res.json())
      .then((newArticle) => setArticles([...articles, newArticle]))
      .catch((err) => console.error(err));
  }
  return (
    <div>
      Add an article here...
      {/* ADD NEW ARTICLE BUTTON */}
      <div
        className="ui secondary inverted button"
        tabIndex="0"
        onClick={handleToggleArticleButton}
        style={{ margin: 10, padding: 20 }}
      >
        {showArticleForm ? "Dismiss Form" : "Add New Article"}
        {/* Add New Article */}
      </div>
      {showArticleForm ? (
        <NewArticleForm onArticleFormSubmission={handleNewArticle} />
      ) : null}
    </div>
  );
};

export default AddArticle;
