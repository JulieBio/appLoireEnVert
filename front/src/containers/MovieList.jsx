import React, { Component } from "react";
import { connect } from "react-redux";
import { updateMoviesList } from "../actions/index";
import { Container, Row, Col } from 'reactstrap';
import Movie from "../components/Movie";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchMovies } from "../actions/index";

class MovieList extends Component {
    componentWillMount() {
        console.log("here", this.props.filterMovies);
        this.props.functionCallDispatchFetchMovies(this.props.filterMovies);
    }

    render() {
        console.log(this.props.filterMovies);
        return (
            <Container>
                <Row>
                    <Col >
                        {this.props.activeMovies.movies.map((movie, index) => (
                            <Movie key={`movie${index}`} movie={movie} />
                        ))}
                    </Col>
                    
                </Row>

            </Container>
        );
    }
}

const mapStateToProps = store => {
    console.log("store", store)
    return store
};

const mapDispatchToProps = dispatch => ({
    functionCallDispatchFetchMovies: filter => dispatch(fetchMovies(filter)),
    addMovie: movie => {
        dispatch(updateMoviesList(movie));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieList);