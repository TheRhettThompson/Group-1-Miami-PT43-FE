import React from 'react';
import "../styles/aboutUs.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Figure from 'react-bootstrap/Figure';
import LMT from '../assets/lorettaMayumiThompsonPhoto.jpg';
import KM from '../assets/kriss_Morejon_and_wife.jpg';


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
          <h1>This is going to be the mission statement of SouthFLDevJobs.</h1>
          <p>Something along the lines of...It all started because we were going through
            bootcamp, and looking for good jobs in the area that we wouldn't have to
            physically relocate to. It was very confusing to search through multiple
            apps just to find jobs in South Florida, or the search was way too broad
            and most of the jobs were remote but didn't really lock down where the
            physical location was...Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat.</p>
        </Figure.Caption>
      </div>

      
      <h1>Meet our team</h1>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Albert Lazo</Card.Title>
            <Card.Text>
              A short bio goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Habitasse
              platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
              dignissim. Nisi lacus sed viverra tellus in. Gravida arcu ac tortor.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <ButtonGroup aria-label="SocialMedia" size="lg" className="mb-2">
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-twitter"></i></Button>
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-linkedin"></i></Button>
                

                <Button variant="backGroundColor= #8e793e">
                    <a href='https://github.com/betolix' target='_blank'>
                      <i class="fa-brands fa-github"/></a>
                </Button>


                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-facebook"></i></Button>
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-google"></i></Button>
              </ButtonGroup>

            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={KM}/>
          <Card.Body>
            <Card.Title>Kriss Morejon</Card.Title>
            <Card.Text>
              A short bio goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Adipiscing diam donec
              adipiscing tristique risus nec feugiat in fermentum. At tellus at urna.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <ButtonGroup aria-label="SocialMedia" size="lg" className="mb-2">
                <Button variant="backGroundColor= #8e793e">
                  <a href='https://www.linkedin.com/in/christopher-morejon-067ab7254/' target='_blank'>
                  <i class="fa-brands fa-linkedin"/></a>
                </Button>

                <Button variant="backGroundColor= #8e793e">
                    <a href='https://github.com/Kriss1205' target='_blank'>
                      <i class="fa-brands fa-github"/></a>
                </Button>
              
                {/* <Button variant="backGroundColor= #8e793e">
                  <a href='mailto:ChristopherMorejon17@gmail.com?body=My custom mail body' target='_blank'>
                  <i class="fa-brands fa-google"/></a>
                </Button> */}
                       
              </ButtonGroup>
            </small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={LMT}/>
          <Card.Body>
            <Card.Title>Loretta Mayumi Thompson</Card.Title>
            <Card.Text>
              A short bio goes here.This is a wider card with supporting text below as a natural lead-in
              to additional content. This card has even longer content than the
              first to show that equal height action. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Viverra nibh cras pulvinar mattis nunc
              sed blandit libero volutpat. Ipsum faucibus vitae aliquet.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">
              <ButtonGroup aria-label="SocialMedia" size="lg" className="mb-2">
                
                <Button variant="backGroundColor= #8e793e">
                    <a href='https://www.linkedin.com/in/loretta-mayumi-thompson-293773256/' target='_blank'>
                      <i class="fa-brands fa-linkedin"/></a>
                </Button>

                <Button variant="backGroundColor= #8e793e">
                    <a href='https://github.com/TheRhettThompson' target='_blank'>
                      <i class="fa-brands fa-github"/></a>
                </Button>
                
                <Button variant="backGroundColor= #8e793e"><i class="fa-brands fa-google"></i></Button>

              </ButtonGroup>
            </small>
          </Card.Footer>
        </Card>
      </CardGroup>

      <Card>
        <Card.Body>
          <Card.Text>
            It all started because we were going through bootcamp, and looking for good jobs in the area that we wouldn't have to physically relocate to....
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fFdoZXJlJTIwYXJlJTIwdGhlJTIwam9ic3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1600&q=60/100px180" />
      </Card>

      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="holder.js/171x180"
        />
        <Figure.Caption>
          Nulla vitae elit libero, a pharetra augue mollis interdum.
        </Figure.Caption>
      </Figure>




    </div>

    



  )
}

export default AboutUs

