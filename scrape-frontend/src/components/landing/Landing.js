import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="ui container">
      <div className="ui very padded tertiary grey inverted center aligned segment">
        <h1
          className="ui header huge"
          style={{
            color: "firebrick",
            fontSize: 52,
            fontFamily: "Varela Round",
          }}
        >
          <i className="newspaper icon"></i>
          Scrape
        </h1>

        <h3 style={{ color: "teal", fontSize: 20, fontFamily: "Varela Round" }}>
          Get Latest Articles Scraped off Your Favourite Blog
        </h3>
      </div>
      {/* GO TO ARTICLES */}
      <div className="ui center aligned segment">
        <div className="ui huge submit animated fade teal button">
          <div className="visible content">Go To Articles</div>
          <Link to={`/articles`}>
            <div className="hidden content">
              <i className="right arrow icon"></i>
            </div>
          </Link>
        </div>
      </div>
      {/* GIPHY GIF */}
      <div className="ui padded tertiary center aligned segment">
        <iframe
          src="https://giphy.com/embed/xUPJPuBSBM4GEMb7Ec"
          width="600"
          height="480"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Landing;
