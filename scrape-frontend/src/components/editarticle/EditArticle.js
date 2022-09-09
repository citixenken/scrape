import React, { useState } from "react";

const EditArticle = ({
  id,
  title,
  web_url,
  byline,
  author,
  date_published,
  onUpdateArticle,
}) => {
  const [articleAuthor, setArticleAuthor] = useState(author);
  const [articleTitle, setArticleTitle] = useState(title);
  const [articleWebUrl, setArticleWebUrl] = useState(web_url);
  const [articleByline, setArticleByline] = useState(byline);
  const [articleDatePublished, setArticleDatePublished] =
    useState(date_published);

  function handleFormSubmit(e) {
    e.preventDefault();

    const articleData = {
      author: articleAuthor,
      title: articleTitle,
      web_url: articleWebUrl,
      byline: articleByline,
      date_published: articleDatePublished,
    };

    fetch(`http://localhost:9292/articles/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(articleData),
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
      <input
        type="text"
        name="title"
        autoComplete="off"
        value={articleTitle}
        onChange={(e) => setArticleTitle(e.target.value)}
      />
      <input
        type="text"
        name="web_url"
        autoComplete="off"
        value={articleWebUrl}
        onChange={(e) => setArticleWebUrl(e.target.value)}
      />
      <input
        type="text"
        name="byline"
        autoComplete="off"
        value={articleByline}
        onChange={(e) => setArticleByline(e.target.value)}
      />
      <input
        type="text"
        name="date_published"
        autoComplete="off"
        value={articleDatePublished}
        onChange={(e) => setArticleDatePublished(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
};

export default EditArticle;
