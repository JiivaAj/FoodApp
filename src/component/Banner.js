import React from "react";
import {Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel"

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col lg={8}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                    className="d-block w-100"
                    src={require('../pic/one.jpeg')}
                    alt="First slide"
              />
              <Carousel.Caption>
                <h3>Margherita</h3>
                <p className="d-none d-sm-block">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <img
                    className="d-block w-100"
                    src={require('../pic/two.jpeg')}
                    alt="Second slide"
             />
              <Carousel.Caption>
                <h3>Cheese pizza</h3>
                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <img
                    className="d-block w-100"
                    src={require('../pic/three.jpeg')}
                    alt="Third slide"
            />
              <Carousel.Caption>
                <h3>Pepporoni</h3>
                <p className="d-none d-sm-block">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center mt-3">
        <h2 className="display-5">Pizzas for Every Occasion!</h2>
        <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        
      </div>
      
    </Container>
  );
};

export default Banner;
