import React from 'react';
import "../styles/landing.css"
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Figure from 'react-bootstrap/Figure';


function Landing() {
  return (
    <div className="Landing">
      {/* <h1>
        This is the Landing page
      </h1> */}

      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 myimage1"
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
            className="d-block w-100 myimage2"
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
            className="d-block w-100 myimage3"
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




      </>



      <div className='cardGroup'>
        <Card>
          <Card.Header>Testimonials</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                I thought I'd have to leave Miami to get a job in coding.
                But not anymore, with Career Space I know the opportunities are right here!{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

        <br />
        <Figure>
          <Figure.Image
            width={371}
            height={380}
            alt="371x380"
            src="https://media.istockphoto.com/id/1212615578/photo/overweight-mature-latin-woman-doing-freelance-work-outdoors-on-laptop.jpg?s=612x612&w=0&k=20&c=69Ttt9FhyKwgwTK8QB_S0pf0149YmVad9j33ChfFcrs="
          />
          <Figure.Caption>
            South Florida is on its way to becoming the East Coast Silicon Valley. I want to be a part of it, and Career Space makes it easy!
          </Figure.Caption>
        </Figure>


        <br />

        <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1573164574001-518958d9baa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" />
          <Card.Body>
            <Card.Text>
              South Florida is by far one of the best places for tech professionals to develop careers.
              Career Space is the best tool to do that!
            </Card.Text>
          </Card.Body>
        </Card>

        <br />

        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                I thought I'd have to leave Miami to get a job in coding.
                But not anymore, with Career Space I know the opportunities are right here!{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>

        <br />
        <Card>
          <Card.Img variant="top" src="https://www.istockphoto.com/search/2/image?phrase=computer%20palm%20tree&alloweduse=availableforalluses&excludenudity=true&sort=best&mediatype=photography&utm_source=unsplash&utm_medium=affiliate&utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fcomputer-palm-tree&utm_term=computer%20palm%20tree%3A%3A%3A" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{' '}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>






      <ButtonGroup aria-label="Basic example" size="lg" className="mb-2">
        <Button variant="warning">LinkedIn FontAwesomeIcon</Button>
        <Button variant="warning">GitHub</Button>
        <Button variant="warning">Facebook</Button>
        <Button variant="warning">Google</Button>
      </ButtonGroup>

    </div>
  )

}

export default Landing