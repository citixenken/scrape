import React, { useState, useEffect } from "react";
import ArticleItem from "../articleitem/ArticleItem";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [articleSearch, setArticleSearch] = useState("");

  const URL = "http://localhost:9292/articles";

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((articles) => setArticles(articles))
      .catch((err) => console.error(err));
  }, []);

  //SEARCH ARTICLES
  //===============
  const articlesToDisplay = articles.filter((article) =>
    article.title.toLowerCase().includes(articleSearch.toLowerCase())
  );

  // UPDATE ARTICLE
  // ==============
  function handleArticleUpdate(updatedArticle) {
    const updatedArticles = articles.map((article) => {
      if (article.id === updatedArticle.id) {
        return updatedArticle;
      } else {
        return article;
      }
    });
    setArticles(updatedArticles);
  }

  //DELETE ARTICLE FROM DB
  //======================
  function handleArticleDelete(deletedArticle) {
    const updatedArticleList = articles.filter(
      (article) => article.id !== deletedArticle.id
    );
    setArticles(updatedArticleList);
  }

  return (
    <div>
      <div className="ui container">
        <div className="ui very padded piled tertiary segment">
          <h1
            className="ui header huge"
            style={{
              color: "firebrick",
              fontSize: 36,
              fontFamily: "Varela Round",
            }}
          >
            My Library Collection
          </h1>
        </div>

        {/* SEARCH FIELD */}
        <div className="ui very padded tertiary segment">
          {/* SEARCH INPUT */}
          <div className="ui input huge left icon fluid search focus ">
            <input
              type="text"
              name="articleSearch"
              value={articleSearch}
              placeholder="Search Article By Title"
              onChange={(e) => setArticleSearch(e.target.value)}
            />
            <i className="book icon"></i>
          </div>
        </div>

        <div className="ui very padded teal secondary inverted  segment">
          {articles ? (
            <div className="ui doubling very padded stackable grid container">
              {articlesToDisplay.map((article, idx) => (
                <div className="four wide column">
                  <ArticleItem
                    key={idx}
                    article={article}
                    onDeleteArticle={handleArticleDelete}
                    onUpdateArticle={handleArticleUpdate}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="ui massive very padded inverted segment">
              <div className="ui active inverted dimmer">
                <div className="ui indeterminate large text loader">
                  <h6>Search To Retrieve Articles</h6>
                </div>
              </div>
              <p></p>
              <p></p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
