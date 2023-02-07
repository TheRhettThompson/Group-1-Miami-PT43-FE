import React from 'react';
import "../styles/landing.css"
import Carousel from 'react-bootstrap/Carousel';
// these are for bootstrap buttons
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Landing() {
  return (
    <div className="Landing">
      <h1>
        This is the Landing page
      </h1>

        {/* function ContainerFluidExample() {
          return (
            <Container fluid>
              <Row>
                <Col>1 of 1</Col>
              </Row>
            </Container>
          );
        } */}

      

      <div className= "Carousel fade">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1562517634-baa2da3acfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80.holder.js/400x400?text=First slide"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Your next tech job could be under the sun</h3>
            <p>Search here for jobs in South Florida</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1546709344-8be01dfbc721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80/800x400?text=Second slide"
             alt="Second slide"
          />
              
          <Carousel.Caption>
            <h3>Work magic in the Magic City</h3>
            <p>Enter here for jobs in Miami-Dade, Broward, and South Florida</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80/800x400?text=Third slide"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Why work in Silicon Valley when you could have endless beaches?</h3>
            <p>Search for tech jobs in Miami and South Florida here.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </div>



      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Front End</Button>
        <Button variant="secondary">Back End</Button>
        <Button variant="secondary">Full Stack</Button>
      </ButtonGroup>

    </div>
  )





}

export default Landing