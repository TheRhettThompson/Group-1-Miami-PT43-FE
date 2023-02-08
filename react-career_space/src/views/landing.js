import React from 'react';
import "../styles/landing.css"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



function Landing() {
  return (
    <div className="Landing">
      {/* <h1>
        This is the Landing page
      </h1> */}

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 myimage"
            src="https://images.unsplash.com/photo-1562517634-baa2da3acfbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Your next tech job could be under the sun</h3>
            <p>Search here for jobs in South Florida.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 myimage"
            src="https://images.unsplash.com/photo-1546709344-8be01dfbc721?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Work magic in the Magic City</h3>
            <p>Enter here for jobs in Miami-Dade, Broward, and South Florida.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 myimage"
            src="https://images.unsplash.com/photo-1506812574058-fc75fa93fead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Why work in Silicon Valley when you could have endless beaches?</h3>
            <p>
              Search for tech jobs in Miami and South Florida here.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <>
        <h1>Join thousands who have found their next tech job right here
         with a block for LOCATION + MAG GLASS, JOB TITLE BUTTTON WITH DROP DOWN?, BUTTON TO EXPLORE JOBS...OR, first, last name, zip code, email address, choose a password user and password, button says sign up</h1>
        <h1>By siGning up for Career Space, you agree to Career Space's Terms of Service & Privacy Policy,
          each one has a hyperlink to those pages</h1>
        <h1>Or sign up using then put social media icons: LinkedIn, Google, Facebook, GitHub</h1>

        <h1>Real Life Success stories here</h1>
        <h1>Meet Gloria, she found here job in coding, insert card here</h1>

        <h1>Testimonials</h1>

        <h1>I thought I'd have to leave Miami to get a job in coding.
          But not anymore, with Career Space I know the opportunities are right here! </h1>


      </>

    <ButtonGroup aria-label="Basic example" size="lg" className="mb-2">
      <Button variant="warning">LinkedIn</Button>
      <Button variant="warning">GitHub</Button>
      <Button variant="warning">Facebook</Button>
      <Button variant="warning">Google</Button>
    </ButtonGroup>



      {/* <ButtonGroup aria-label="Basic example">
        <Button className='button' variant="warning">Front End</Button>
        <Button className='button' variant="warning">Back End</Button>
        <Button className='button' variant="warning">Full Stack</Button>
      </ButtonGroup> */}

    </div>
  )

}

export default Landing