import React from 'react';
import "../styles/aboutUs.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


function AboutUs() {
  return (
    <div className="AboutUs">
      <h1>This is the About Us page</h1>
      <p>This is going to be information about CareerSpace. This is going to be the mission statement of CareerSpace</p>

      <h1>Meet our team</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Albert Lazo</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This content is a little bit longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <ButtonGroup aria-label="SocialMedia" size="lg" className="mb-2">
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-linkedin"></i></Button>
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-github"></i></Button>
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-facebook"></i></Button>
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-google"></i></Button>
              </ButtonGroup>
            
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Kriss Morejon</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <ButtonGroup aria-label="SocialMedia" size="lg" className="mb-2">
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-linkedin"></i></Button>
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-github"></i></Button>
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-facebook"></i></Button>
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-google"></i></Button>
              </ButtonGroup>
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Loretta Mayumi Thompson</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <ButtonGroup aria-label="SocialMedia" size="lg" className="mb-2">
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-linkedin"></i></Button>
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-github"></i></Button>
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-facebook"></i></Button>
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-google"></i></Button>
              </ButtonGroup>
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>



    </div>
  )
}

export default AboutUs

