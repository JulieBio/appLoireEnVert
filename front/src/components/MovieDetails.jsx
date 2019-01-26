import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Container, CardImg } from "reactstrap";



class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      poster: null,
      comment: null
    };
    this.id = this.props.match.params.id;
  }

  componentWillMount() {
    axios.get(`/movie/${this.id}`).then(result => {
      console.log(result.data)
      this.setState({
        name: result.data.name,
        poster: result.data.poster,
        comment: result.data.comment,
       
      });
    });
  }

  render() {
    return (
      <Container>
      
        <div>
          <CardImg src={this.state.poster} alt="image evenement" />
          <p className="nom-event">{this.state.name}</p>
          <p className="description-event">{this.state.comment}</p>
        </div>
      </Container>
    );
  }
}

export default MovieDetails;
