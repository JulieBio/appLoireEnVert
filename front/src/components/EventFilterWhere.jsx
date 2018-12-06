import React, { Component} from "react";
// import { withRouter } from 'react-router-dom';
// import Event from "../components/Event";
import axios from "axios";
// import EventList from "./containers/EventList";
import { Button } from 'reactstrap';
import { connect } from "react-redux";
// import Event from "../components/Event";
import { fetchFilterWho } from "../actions/index";
import { updateFilterListWho } from "../actions/index";


class EventFilterWhere extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  filterPlace: null,
                  filterWho: null,
                  
            };

            this.place = this.props.match.params.place;
            // this.who = this.props.match.params.who;
      }
      
      getFilter () {
            //Récupération de resultats filtrés via axios
            axios.get(`/event/place`).then(result => {
            // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
                  this.setState({
                  filterPlace:  result.body
          });
      });
      this.props.functionCallDispatch();
    
}
    
 
      routeChange = () =>{
            console.log('was click')
            let path = "/who"
            this.props.history.push(path);
      }
      
      render() {
            return (
                  <div className="buttoncenter">
                        <Button 
                              onClick= {this.routeChange}
                              color="secondary" 
                              size="lg" block>
                              {this.filterPlace === "Forez"}
                        </Button>
                        <Button
                              onClick={this.routeChange}
                              color="secondary" 
                              size="lg" block>
                              {/* {{event.place}=="Roannais"} */}
                        </Button>
                        <Button 
                              onClick={this.routeChange}
                              color="secondary" 
                              size="lg" block>
                              {/* {{event.place}=="Stéphanois Pilat"} */}
                        </Button>
                  </div>
                  );
             }
      }
      
      const mapStateToProps = store => store;

      const mapDispatchToProps = dispatch => ({
        functionCallDispatch: () => dispatch(fetchFilterWho()),
        addEventFilter: event => {
          dispatch(updateFilterListWho(event));
        }
      });
      
      // const mapDispatchToProps = dispatch => ({
      //   updateRandomCall: () => dispatch(updateRandomHouse()),
      //   updateSpecificCall: (id) => dispatch(updateSpecificHouse(id)),
      //   updateHouseList: () => dispatch(fetchHouses()),
      // })
      
      export default connect(
        mapStateToProps,
        mapDispatchToProps
      )(EventFilterWhere);
      

          