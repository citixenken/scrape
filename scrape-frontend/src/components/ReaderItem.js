import React from "react";

const ReaderItem = ({ reader }) => {
  const { username } = reader;
  return (
    <div className="ui very padded segment item">
      <div
        className="header"
        style={{
          fontSize: 24,
          fontFamily: "Varela Round",
          padding: 10,
        }}
      >
        #Reader ID: {reader.id}
      </div>
      <div className="content">
        <p className="description">Name: {username}</p>
      </div>
    </div>
  );
};

export default ReaderItem;
