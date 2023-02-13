import React from 'react';
import "../styles/aboutUs.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Figure from 'react-bootstrap/Figure';


function AboutUs() {
  return (
    <div className="AboutUs">
      <h1>About Us</h1>
      
      <div className="MissionStatementFigure">
        <Figure.Image
          width={171}
          height={180}
          alt="271x280"
          src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nJTIwYm9vdGNhbXB8ZW58MHx8MHx8&auto=format&fit=crop&w=1600&q=60/171x180"
        />
        <Figure.Caption>
          <h1>This is going to be the mission statement of CareerSpace.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</p>
        </Figure.Caption>
      </div>




      <h1>Meet our team</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Albert Lazo</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse 
              platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper 
              dignissim. Nisi lacus sed viverra tellus in. Gravida arcu ac tortor 
              dignissim convallis aenean et tortor.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec 
            adipiscing tristique risus nec feugiat in fermentum. At tellus at urna 
            condimentum mattis pellentesque id nibh.{' '}
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
          <Card.Img variant="top" img="../src/assets/Loretta_Mayumi_Thompson_photo.png/100px160" />
          <Card.Body>
            <Card.Title>Loretta Mayumi Thompson</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action. Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc
              sed blandit libero volutpat. Ipsum faucibus vitae aliquet nec ullamcorper 
              sit amet risus. 
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

      <Card>
        <Card.Body>
          <Card.Text>
            We were going through bootcamp, and looking for good jobs....
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fFdoZXJlJTIwYXJlJTIwdGhlJTIwam9ic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60/100px180" />
      </Card>



    </div>
  )
}

export default AboutUs

