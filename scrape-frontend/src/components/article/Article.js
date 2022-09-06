import React, { useState, useEffect } from "react";
import ArticleList from "../articlelist/ArticleList";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const URL = "http://localhost:9292/articles";

  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((articles) => setArticles(articles))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Articles;
