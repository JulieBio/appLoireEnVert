import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



// import {
//   updateRandomHouse,
//   updateSpecificHouse,
//   fetchHouses,
// } from '../actions';

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

// const mapStateToProps = store => store;

// const mapDispatchToProps = dispatch => ({
//   updateRandomCall: () => dispatch(updateRandomHouse()),
//   updateSpecificCall: (id) => dispatch(updateSpecificHouse(id)),
//   updateHouseList: () => dispatch(fetchHouses()),
// })

export default connect(mapStateToProps, mapDispatchToProps)(Result)
