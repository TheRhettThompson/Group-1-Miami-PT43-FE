import React, { useState } from "react";
import "../styles/landing.css";
import Carousel from "react-bootstrap/Carousel";

//these are for bootstrap buttons
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

// export const Landing = () => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };
// CODE FROM CARLOS
//<Carousel activeIndex = { index } onSelect = { handleSelect } > 

function Landing() {
  return (
    <div className="Landing">
      <h1>This is the Landing page</h1>

      <div className="Carousel fade">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png"
              alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png"
              alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.premiere-urgence.org/wp-content/uploads/2021/11/800x400.png"
              alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">Front End</Button>
        <Button variant="secondary">Back End</Button>
        <Button variant="secondary">Full Stack</Button>
      </ButtonGroup>

    </div>

  )
}

export default Landing;