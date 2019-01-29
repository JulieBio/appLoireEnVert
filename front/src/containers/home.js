import React from 'react';
import { Component } from "react";
import EventList from "./EventList";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Home extends Component {
  render() {
    return (
      <div>
        <EventList />
      </div>
    );
  }
}

export default Home;
