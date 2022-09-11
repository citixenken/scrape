import React, { useState } from "react";

const NewArticleForm = ({ onArticleFormSubmission }) => {
  const [newArticle, setNewArticle] = useState({
    title: "",
    web_url: "",
    byline: "",
    author: "",
    date_published: "",
  });
  const [showArticleForm, setShowArticleForm] = useState(false);

  function handleFormChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setNewArticle({ ...newArticle, [name]: value });
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    onArticleFormSubmission(newArticle);
    setShowArticleForm((showArticleForm) => !showArticleForm);

    //RESET form after submission
    //===========================
    setNewArticle({
      title: "",
      web_url: "",
      byline: "",
      author: "",
      date_published: "",
    });
  }
  return (
    <div className="ui container">
      {showArticleForm ? null : (
        <div className="ui very padded teal inverted segment">
          <form className="ui form big success" onSubmit={handleFormSubmit}>
            <div className="required field">
              <input
                type="text"
                name="title"
                value={newArticle.title}
                placeholder="Enter Article Title"
                onChange={handleFormChange}
              />
            </div>
            <div className="required field">
              <input
                type="text"
                name="web_url"
                value={newArticle.web_url}
                placeholder="https://"
                onChange={handleFormChange}
              />
            </div>
            <div className="required field">
              <input
                type="text"
                name="byline"
                value={newArticle.byline}
                placeholder="Enter Article Byline"
                onChange={handleFormChange}
              />
            </div>
            <div className="required field">
              <input
                type="text"
                name="author"
                value={newArticle.author}
                placeholder="Enter Author"
                onChange={handleFormChange}
              />
            </div>
            <div className="required field">
              <input
                type="text"
                name="date_published"
                value={newArticle.date_published}
                placeholder="Enter Date Published"
                onChange={handleFormChange}
                style={{ fontSize: 18, fontFamily: "Varela Round" }}
              />
            </div>
            <input
              className="ui submit primary huge button"
              type="submit"
              value="Submit"
              style={{ margin: 10 }}
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default NewArticleForm;
