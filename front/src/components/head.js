import React from "react";
import "./head.css";
// import Media from "react-media";

// const Media = require("react-media");

class Head extends React.Component {
  render() {
    return (
      <div className="header">
        <script src="https://unpkg.com/react-media/umd/react-media.min.js" />
        <div className="logo" />
        <div className="titleHeader">
          <p className="titleLoire">Loire en vert</p>
          <p className="title2Loire">
            Toutes les activités nature dans la Loire
          </p>
        </div>
      </div>
    );
  }
}

export default Head;
