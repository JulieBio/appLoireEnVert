import React, { Component } from 'react';
import './head.css';
// import Media from "react-media";

// const Media = require("react-media");

class Head extends Component {
    render() {
      return (
          <div className="header">
          <script src="https://unpkg.com/react-media/umd/react-media.min.js"></script>
            <div className="logo"></div>
            <div classname="titleHeader">
            <p className="titleLoire">Loire en vert</p>
            <p className="title2Loire">Toutes les activités nature dans la Loire</p>
            </div>
          </div>
      );
    }
  }
  
  export default Head;