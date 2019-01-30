import React from "react";
import "./head.css";
import HeadBack from "./headBack";
import HeadNoBack from "./headNoBack";

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlAdress: null
    };
  }

  componentDidMount() {
    this.setState({ urlAdress: window.location.href });
  }

  render() {
    return (
      <div className="header">
        {window.location.href === "http://localhost:3000/who" ? (
          <HeadBack />
        ) : (
            <HeadNoBack />
          )}
      </div>
    );
  }
}

export default Head;
