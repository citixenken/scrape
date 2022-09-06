import React from "react";
import ArticleItem from "../articleitem/ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div>
      <ul>
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </ul>
    </div>
  );
};

export default ArticleList;
