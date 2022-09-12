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

    const URL = `${process.env.REACT_APP_API_URL}/articles/${id}`;

    fetch(URL, {
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
    <div className="ui very padded teal inverted segment">
      <form className="ui form big success" onSubmit={handleFormSubmit}>
        <div className="required field">
          <input
            type="text"
            name="author"
            autoComplete="off"
            value={articleAuthor}
            onChange={(e) => setArticleAuthor(e.target.value)}
          />
        </div>

        <div className="required field">
          <input
            type="text"
            name="title"
            autoComplete="off"
            value={articleTitle}
            onChange={(e) => setArticleTitle(e.target.value)}
          />
        </div>

        <div className="required field">
          <input
            type="text"
            name="web_url"
            autoComplete="off"
            value={articleWebUrl}
            onChange={(e) => setArticleWebUrl(e.target.value)}
          />
        </div>

        <div className="required field">
          <input
            type="text"
            name="byline"
            autoComplete="off"
            value={articleByline}
            onChange={(e) => setArticleByline(e.target.value)}
          />
        </div>

        <div className="required field">
          <input
            type="text"
            name="date_published"
            autoComplete="off"
            value={articleDatePublished}
            onChange={(e) => setArticleDatePublished(e.target.value)}
          />
        </div>

        <input
          className="ui submit primary huge button"
          type="submit"
          value="Save"
        />
      </form>
    </div>
  );
};

export default EditArticle;
