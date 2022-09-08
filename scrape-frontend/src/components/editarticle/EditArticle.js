import React, { useState } from "react";

const EditArticle = ({ id, author, onUpdateArticle }) => {
  const [articleAuthor, setArticleAuthor] = useState(author);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/articles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: articleAuthor,
      }),
    })
      .then((r) => r.json())
      .then((updatedArticle) => onUpdateArticle(updatedArticle));
  }
  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="author"
        autoComplete="off"
        value={articleAuthor}
        onChange={(e) => setArticleAuthor(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
};

export default EditArticle;
