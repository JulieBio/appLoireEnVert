import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row, Col } from "reactstrap";
import { Card, CardImg, CardBody, CardSubtitle } from "reactstrap";
import { NavLink } from "react-router-dom";




const Movie = ({ movie }) => (
  <Container>
    <Row>
      <Col sm="6">
    <div className="cardAccueil">
      <NavLink to={`/movie/${movie.id}`} className="lienAccueil">
        <Card>
          <CardImg
            top
            src={movie.image}
            alt="Card image cap"
            className="CardeImage"
          />
          <CardBody>
            <CardSubtitle className="nameEvent">{movie.name}</CardSubtitle>
            <CardSubtitle className="itemEvent">
              {movie.date}, {movie.time}
            </CardSubtitle>
            <CardSubtitle className="itemEvent">{movie.where}</CardSubtitle>
            
          </CardBody>
        </Card>
      </NavLink>
    </div>
    </Col>
    </Row>
    
  </Container>
);
export default Movie;
